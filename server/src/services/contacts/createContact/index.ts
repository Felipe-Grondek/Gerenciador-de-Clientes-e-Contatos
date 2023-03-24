import { ICreateContact } from "../../../interfaces";
import { prisma } from "../../../server";

const createContactService = async (payload: ICreateContact, userId: string) => {
    const newContact = await prisma.contact.create({
        data: {...payload, userId}
    })

    return newContact;
}

export { createContactService };
