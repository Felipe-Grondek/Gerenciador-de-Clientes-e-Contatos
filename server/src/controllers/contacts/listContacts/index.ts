import { Request, Response } from "express";
import { listContactsService } from "../../../services";


const listContactsController = async (req: Request, res: Response) => {
    const contacts = await listContactsService(req.userId);

    return res.status(200).json(contacts);
}

export { listContactsController };
