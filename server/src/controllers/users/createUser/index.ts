import { Request, Response } from "express";
import { ICreateUser } from "../../../interfaces";
import { createUserService } from "../../../services";


const createUserController = async (req: Request, res: Response) => {
    const payload = req.validatedBody;
    const data = await createUserService(payload as ICreateUser);

    return res.status(201).json(data);
}

export { createUserController };