import { createContext, useContext, useEffect, useState } from "react";

import { instance } from "../services/api";
import { ToastError, ToastSucess } from "../services/toast";
import { UserContext } from "./UserContext";
import { iContactCardProps, iContactContext, iContactContextProps, iEditContact, iNewContact } from "../interfaces";

export const ContactContext = createContext({} as iContactContext)

export default function ContactContextProvider({children}: iContactContextProps) {

    const [modalOpen, setModalOpen] = useState(false)
    const [modalEditOpen, setModalEditOpen] = useState(false)
    const [cardInfo, setCardInfo] = useState<iContactCardProps | null>(null)
    const [uptadeList, setUpdateList] = useState<string | null>(null)

    const {setUser, setLoading} = useContext(UserContext)

    useEffect(() => {

        async function reloadList() {
            const {data} = await instance.get("/profile")

            setUser(data)
        }
        
        if(uptadeList) {
            reloadList()
        }

    }, [uptadeList])

    function openModal() {
        setModalOpen(true)
    }

    function closeModal() {
        setModalOpen(false)
    }

    function openEditModal(data: iContactCardProps) {
        setCardInfo(data)
        setModalEditOpen(true)
    }

    function closeEditModal() {
        setModalEditOpen(false)
    }

    async function newContact(dataForm: iNewContact) {
        setLoading(true)
        try {
            const {data} = await instance.post("/contacts", dataForm)
            setUpdateList(data)
            ToastSucess("Contato registrado com sucesso!")

        } catch (error) {
            setLoading(false)
            console.log(error)

            ToastError('Ops, algo deu errado! Tente novamente.')
        }
        setLoading(false)
    }

    async function removeContact(id: string) {
        setLoading(true)
        try {
            await instance.delete(`/contacts/${id}`)
            setUpdateList(id)
        } catch (error) {
            ToastError('Ops, algo deu errado! Tente novamente.')
            console.log(error)
        }
        setLoading(false)
        setModalEditOpen(false)
    }

    async function editContact(dataForm: iEditContact) {
        setLoading(true)
        const {id, firstName, lastName, email, phone} = dataForm
        try {
            await instance.patch(`/contacts/${id}`, {firstName, lastName, email, phone})
            setUpdateList(`${id}, ${firstName} ${lastName}`)
            ToastSucess("Contato atualizado com sucesso!")
        } catch (error) {
            setLoading(false)
            ToastError('Ops, algo deu errado! Tente novamente.')
            console.log(error)
        }
        setModalEditOpen(false)
        setLoading(false)
    }

    return(
        <ContactContext.Provider value={{modalOpen, openModal, closeModal, newContact, removeContact, editContact, modalEditOpen, openEditModal, closeEditModal, cardInfo}}>
            {children}
        </ContactContext.Provider>
    )
}