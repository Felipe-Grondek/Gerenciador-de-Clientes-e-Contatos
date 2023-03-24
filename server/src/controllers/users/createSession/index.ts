import { Request, Response } from "express";
import { createSessionService } from "../../../services";


const createSessionController = async (req: Request, res: Response) => {
    const payload = req.validatedBody;
    const bdUser = req.dbUser;

    const data = await createSessionService(payload, bdUser);

    return res.status(200).json(data);
};

export { createSessionController };
