export interface IUserLogin {
    email: string;
    password: string;
}

export interface ICreateUser {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phone: string;
}

export interface IUser extends ICreateUser {
    createdAt: Date;
    updatedAt: Date;
}

export interface IUserLoginResponse {
    token: string;
    user: IUser;
}

export interface IUpdateUser {
    firstName?: string;
    lastName?: string;
    password?: string;
    phone?: string;
}