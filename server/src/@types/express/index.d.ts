import { Contact, User } from "@prisma/client";
import { IUserLogin, IUser, ICreateUser, ICreateContact } from "../../interfaces";


declare global {
    namespace Express {
        interface Request {
            validatedBody: IUserLogin | ICreateUser;
            dbUser: User;
            userId: string;
            userInParams: User;
            contact: Contact;
        }
    }
}