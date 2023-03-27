import { Request, Response } from "express";
import { ICreateContact } from "../../../interfaces";
import { createContactService } from "../../../services";


const createContactController = async (req: Request, res: Response) => {
    const contact = await createContactService(req.validatedBody as ICreateContact, req.userId)

    return res.status(201).json(contact);
}

export { createContactController }