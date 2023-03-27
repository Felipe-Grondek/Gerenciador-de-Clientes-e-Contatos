export interface ICreateContact {
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
}

export interface IUpdateContact {
    email?: string;
    firstName?: string;
    lastName?: string;
    phone?: string;
}