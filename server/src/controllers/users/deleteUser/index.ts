import { Request, Response } from "express";
import { deleteUserService } from "../../../services";

const deleteUserController = async (req: Request, res: Response) => {
    await deleteUserService(req.userInParams);

    return res.status(204).json()
};

export { deleteUserController };
