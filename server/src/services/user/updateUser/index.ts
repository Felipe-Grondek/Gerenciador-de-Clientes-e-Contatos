import { User } from "@prisma/client";
import { hash } from "bcryptjs";
import { AppError } from "../../../errors";
import { IUpdateUser } from "../../../interfaces";
import { userReturnSchema } from "../../../schemas";
import { prisma } from "../../../server";


const updateUserService = async (payload: IUpdateUser, user: User) => {
    if ("phone" in payload) {
        const phone = await prisma.user.findUnique({
            where: {
                phone: payload.phone
            }
        })

        if (phone) {
            throw new AppError("this phone already in use", 409)
        }
    }

    if ("password" in payload) {
        const hashPassword = await hash(payload.password!, 8)
        payload.password = hashPassword
    }


    const updateUser = await prisma.user.update({
        where: { id: user.id },
        data: payload
    });

    const finalUser = await userReturnSchema.validate(updateUser, {
        stripUnknown: true
    })

    return finalUser;
}

export { updateUserService };