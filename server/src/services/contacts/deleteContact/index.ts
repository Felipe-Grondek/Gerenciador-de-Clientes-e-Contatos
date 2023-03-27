import { Contact } from "@prisma/client"
import { prisma } from "../../../server"


const deleteContactService = async (contact: Contact) => {
    await prisma.contact.delete({
        where: {id: contact.id}
    })

    return;
};

export { deleteContactService };
