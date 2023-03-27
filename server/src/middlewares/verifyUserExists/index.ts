import { NextFunction, Request, Response } from "express";
import { AppError } from "../../errors";
import { prisma } from "../../server";

const verifyUserExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const user = await prisma.user.findUnique({
        where: {
            email: req.validatedBody.email
        },
        include: {contacts: true}
    });

    if(!user) {
        throw new AppError("this user not exists", 404)
    }

    req.dbUser = user;

    return next();
}

export { verifyUserExistsMiddleware };