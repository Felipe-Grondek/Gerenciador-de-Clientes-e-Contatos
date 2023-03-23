import { IUserLogin, IUser } from "../../interfaces";


declare global {
    namespace Express {
        interface Request {
            validatedBody: IUserLogin;
            dbUser: IUser;
        }
    }
}