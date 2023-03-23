export interface IUserLogin {
    email: string;
    password: string;
}

export interface ICreateUser {
    primaryEmail: string;
    secondaryEmail?: string;
    password: string;
    firstName: string;
    lastName: string;
    primaryPhone: string;
    secondaryPhone?: string;
}

export interface IUser extends ICreateUser {
    createdAt: Date;
    updatedAt: Date;
}

export interface IUserLoginResponse {
    token: string;
    user: IUser;
}