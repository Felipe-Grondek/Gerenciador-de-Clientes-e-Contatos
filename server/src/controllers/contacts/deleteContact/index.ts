import { Request, Response } from "express";
import { deleteContactService } from "../../../services";


const deleteContactController = async (req: Request, res: Response) => {
    await deleteContactService(req.contact);

    return res.status(204).json();
};

export { deleteContactController };
