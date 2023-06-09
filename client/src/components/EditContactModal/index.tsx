import { useContext } from "react";
import { useForm } from "react-hook-form"
import { ContactContext } from "../../contexts/ContactContext";
import { iEditContact } from "../../interfaces";
import { ButtonStyled } from "../../styles/Button";
import { Input, Label } from "../../styles/Input";
import { FormStyled } from "../Form";
import { ModalWrapper } from "./style";

export default function EditContactModal() {

    const {closeEditModal, editContact, cardInfo, removeContact} = useContext(ContactContext)

    const {register, handleSubmit} = useForm<iEditContact>()

    return(
        <ModalWrapper>
            <FormStyled onSubmit={handleSubmit(editContact)}>
                <div className="formHeader">
                    <h3>Editar Contato</h3>
                    <button onClick={() => closeEditModal()} type="button">x</button>
                </div>
                <div className="formBody">
                    <Label htmlFor="firstName">Nome</Label>
                    <Input id="firstName" placeholder="Nome do Contato" defaultValue={cardInfo?.firstName} {...register("firstName")} />

                    <Label htmlFor="lastName">Sobrenome</Label>
                    <Input id="lastName" placeholder="Sobrenome do Contato" defaultValue={cardInfo?.lastName} {...register("lastName")} />

                    <Label htmlFor="email">Email</Label>
                    <Input type={"email"} id="email" placeholder="Email do Contato" defaultValue={cardInfo?.email} {...register("email")} />

                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" placeholder="Telefone do Contato" defaultValue={cardInfo?.phone} {...register("phone")} />

                    <input type="text" hidden {...register("id", {value: cardInfo?.id})}/>

                    <div className="buttonArea">
                        <ButtonStyled type="submit">Editar Contato</ButtonStyled>
                        <ButtonStyled onClick={() => removeContact(
                            cardInfo !== null ? cardInfo.id : ""
                        )} btnStyle="grey-light" type="button">Deletar Contato</ButtonStyled>
                    </div>
                </div>
            </FormStyled>
        </ModalWrapper>
    )
}
