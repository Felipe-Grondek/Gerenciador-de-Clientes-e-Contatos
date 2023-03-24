import "dotenv/config";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import { AppError } from "../../../errors";
import { IUserLogin } from "../../../interfaces";
import { userReturnSchema } from "../../../schemas";
import { User } from "@prisma/client";

const createSessionService = async (payload: IUserLogin, userDb: User) => {
    const passwordMatch = await compare(payload.password, userDb.password);

    if (!passwordMatch) {
        throw new AppError("wrong email / password", 403)
    }

    const token = jwt.sign(
        { id: userDb.id },
        process.env.SECRET_KEY as string,
        { expiresIn: "24h" }
    );

    const user = await userReturnSchema.validate(
        userDb, {
        stripUnknown: true,
    }
    );

    return { token, user: { ...user } };
};

export { createSessionService };