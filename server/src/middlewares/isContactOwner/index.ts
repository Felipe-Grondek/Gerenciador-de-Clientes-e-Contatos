import { Request, Response, NextFunction } from "express";
import { AppError } from "../../errors";

const isContactOwnerMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    if(req.userId !== req.contact.userId) {
        throw new AppError("you need be contact owner")
    }

    return next();
};

export { isContactOwnerMiddleware };