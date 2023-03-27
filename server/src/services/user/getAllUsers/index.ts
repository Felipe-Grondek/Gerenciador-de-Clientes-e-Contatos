import { usersListReturnSchema } from "../../../schemas";
import { prisma } from "../../../server"


const getAllUsersService = async () => {
    const users = await prisma.user.findMany();

    const usersReturnlist = await usersListReturnSchema.validate(users, { stripUnknown: true });

    return usersReturnlist;
};

export { getAllUsersService };