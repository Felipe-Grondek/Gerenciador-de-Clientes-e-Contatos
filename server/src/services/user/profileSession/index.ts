import { userReturnSchema } from "../../../schemas"
import { prisma } from "../../../server"

const profileService = async (userId: string) => {
    const user = await prisma.user.findUnique({
        where: {id: userId},
        include: {contacts: true}
    })

    const userReturn = await userReturnSchema.validate(user, {stripUnknown: true})

    return userReturn;
};

export { profileService };
