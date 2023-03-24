import { Request, Response } from "express";
import { updateContactService } from "../../../services";


const updateContactController = async (req: Request, res: Response) => {
    const contact = await updateContactService(req.validatedBody, req.contact);

    return res.status(200).json(contact);
};

export { updateContactController };
