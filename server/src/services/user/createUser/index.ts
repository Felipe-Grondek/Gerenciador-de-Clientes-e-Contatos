import { hash } from "bcryptjs";
import { AppError } from "../../../errors";
import { ICreateUser } from "../../../interfaces";
import { userReturnSchema } from "../../../schemas";
import { prisma } from "../../../server";


const createUserService = async (payload: ICreateUser) => {
    const user = await prisma.user.findUnique({
        where: {
            email: payload.email
        }
    })

    const phone = await prisma.user.findUnique({
        where: {
            phone: payload.phone
        }
    })

    if (user) {
        throw new AppError("user already exists", 409)
    }

    if (phone) {
        throw new AppError("this phone already in use", 409)
    }

    const hashPassword = await hash(payload.password, 8)
    payload.password = hashPassword

    const newUser = await prisma.user.create({ data: payload });

    const finalUser = await userReturnSchema.validate(newUser, {
        stripUnknown: true
    })

    return finalUser;
}

export { createUserService };