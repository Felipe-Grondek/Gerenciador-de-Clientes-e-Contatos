interface iUserContextProps {
    children: React.ReactNode
}

interface iContacts {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    created_at: string;
    updated_at: string;
}

interface iUser {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    created_at: Date;
    updated_at: Date;
    contacts: iContacts[];
}

interface iUserContext {
    registerUser: (dataForm: iFormRegister) => void;
    loginFn: (dataForm: iFormLogin) => void;
    logoutFn: () => void;
    user: iUser | null;
    setUser: React.Dispatch<React.SetStateAction<iUser | null>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    loadingDashboard: boolean;
}

interface iFormLogin {
    email: string;
    password: string;
}

interface iFormRegister {
    email: string;
    password: string;
    confirmPassword?: string;
    firstName: string;
    lastName: string;
    phone: string;
}

interface iContactContextProps {
    children: React.ReactNode
}

interface iContactContext {
    modalOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
    newContact: (dataForm: iNewContact) => void;
    removeContact: (id: string) => void;
    editContact: (dataForm: iEditContact) => void;
    modalEditOpen: boolean;
    openEditModal: (data: iContactCardProps) => void;
    closeEditModal: () => void;
    cardInfo: iContactCardProps | null;
}

interface iNewContact {
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
}

interface iEditContact {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
}

interface iContactCardProps {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
}


export {
    iUserContextProps,
    iContacts,
    iUser,
    iUserContext,
    iFormLogin,
    iFormRegister,
    iContactContextProps,
    iContactCardProps,
    iContactContext,
    iNewContact,
    iEditContact
};