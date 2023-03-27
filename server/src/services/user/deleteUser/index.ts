import { User } from "@prisma/client";
import { prisma } from "../../../server";


const deleteUserService = async (user: User) => {
    await prisma.user.delete({
        where: { id: user.id }
    })

    return;
};

export { deleteUserService };