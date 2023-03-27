import { Request, Response, NextFunction } from "express";
import * as yup from "yup";
import { AppError } from "../../errors";

const validatePayloadMiddleware = (schema: yup.AnyObject) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const validated = await schema.validate(req.body, {
                abortEarly: false,
                stripUnknown: true,
            })

            req.validatedBody = validated;
            return next();
        } catch (error) {
            if(error instanceof yup.ValidationError) {
                throw new AppError(error.errors[0], 400)
            }
        }
    }
};

export { validatePayloadMiddleware };