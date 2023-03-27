import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import { ButtonStyled } from "../../styles/Button";
import { Input, Label } from "../../styles/Input";
import { FormStyled } from "../Form";
import { ModalWrapper } from "./style";

import { ContactContext } from "../../contexts/ContactContext";
import { iNewContact } from "../../interfaces";
import { contactSchema } from "../../schemas/contact";

export default function AddContactModal() {

    const {closeModal, newContact} = useContext(ContactContext)

    const {register, handleSubmit, formState: {errors, submitCount, isSubmitSuccessful}, resetField} = useForm<iNewContact>({
        resolver: yupResolver(contactSchema)
    })

    useEffect(() => {
        if(isSubmitSuccessful) {
            resetField("firstName")
            resetField("lastName")
            resetField("email")
            resetField("phone")
        }
    }, [submitCount])

    return(
        <ModalWrapper>
            <FormStyled onSubmit={handleSubmit(newContact)}>
                <div className="formHeader">
                    <h3>Cadastrar Contato</h3>
                    <button onClick={() => closeModal()} type="button">x</button>
                </div>
                <div className="formBody">
                    <Label htmlFor="firstName">Nome</Label>
                    <Input id="firstName" placeholder="Digite seu nome..." {...register("firstName")}/>
                    <span>{errors.firstName?.message}</span>

                    <Label htmlFor="lastName">Sobrenome</Label>
                    <Input id="lastName" placeholder="Digite seu sobrenome..." {...register("lastName")}/>
                    <span>{errors.lastName?.message}</span>

                    <Label htmlFor="email">Email</Label>
                    <Input type={"email"} id="email" placeholder="Digite o email..." {...register("email")}/>
                    <span>{errors.email?.message}</span>

                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" placeholder="Digite o telefone..." {...register("phone")}/>
                    <span>{errors.phone?.message}</span>

                    <ButtonStyled type="submit">Cadastrar Contato</ButtonStyled>
                </div>
            </FormStyled>
        </ModalWrapper>
    )
}
