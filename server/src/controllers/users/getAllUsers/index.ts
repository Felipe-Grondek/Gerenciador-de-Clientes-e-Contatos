import { Request, Response } from "express";
import { getAllUsersService } from "../../../services";


const getAllUsersController = async (req: Request, res: Response) => {
    const users = await getAllUsersService();

    return res.status(200).json(users);
};

export { getAllUsersController };