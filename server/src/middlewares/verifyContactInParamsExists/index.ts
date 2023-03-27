import { Request, Response, NextFunction } from "express";
import { AppError } from "../../errors";
import { prisma } from "../../server";

const verifyContactInParamsExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const contactInParams = await prisma.contact.findUnique({
        where: {id: req.params.id}
    });

    if(!contactInParams) {
        throw new AppError("this contact not exists", 404)
    }

    req.contact = contactInParams;

    return next();
};

export { verifyContactInParamsExistsMiddleware };