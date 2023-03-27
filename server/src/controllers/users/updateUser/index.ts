import { Request, Response } from "express";
import { updateUserService } from "../../../services";


const updateUserController = async (req: Request, res: Response) => {
    const user = await updateUserService(req.validatedBody, req.userInParams);

    return res.status(200).json(user);
};

export { updateUserController };