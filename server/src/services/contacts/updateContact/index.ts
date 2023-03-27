import { Contact } from "@prisma/client";
import { IUpdateContact } from "../../../interfaces";
import { prisma } from "../../../server";

const updateContactService = async (payload: IUpdateContact, contact: Contact) => {
    const updatedContact = await prisma.contact.update({
        where: {id: contact.id},
        data: payload
    });

    return updatedContact;
}

export { updateContactService };