import { prisma } from "../../../server"


const listContactsService = async (userId: string) => {
    const contacts = await prisma.contact.findMany({
        where: {userId: userId}
    })

    return contacts;
}

export { listContactsService };