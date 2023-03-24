import { Request, Response, NextFunction } from "express";
import { AppError } from "../../errors";

const isAccountOwnerMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    if(req.userId !== req.userInParams.id) {
        throw new AppError("you need be account owner to delete")
    }

    return next();
};

export { isAccountOwnerMiddleware };