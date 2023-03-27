import { Request, Response, NextFunction } from "express";
import { AppError } from "../../errors";
import { prisma } from "../../server";

const verifyUserInParamsExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const userInParams = await prisma.user.findUnique({
        where: {id: req.params.id}
    });

    if(!userInParams) {
        throw new AppError("this user not exists", 404)
    }

    req.userInParams = userInParams;

    return next();
};

export { verifyUserInParamsExistsMiddleware };