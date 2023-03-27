import { useContext } from "react";
import { FaRegTrashAlt } from "react-icons/fa"
import { ContactContext } from "../../contexts/ContactContext";
import { iContactCardProps } from "../../interfaces";
import { CardStyled } from "./style";

export default function ContactCard({firstName, lastName, email, phone, id}: iContactCardProps) {

    const {removeContact, openEditModal} = useContext(ContactContext)

    return(
        <CardStyled
        >   
            <div className="clickContainer"
                onClick={() => openEditModal({email, firstName, lastName, phone, id})}
            >
                <h3>{firstName}</h3>
                <h4>{email}</h4>
            </div>
            <div className="cardContainer">
                <button onClick={() => removeContact(id)}><FaRegTrashAlt className="trashIcon" /></button>
            </div>
        </CardStyled>
    )
}

export function EmptyCard({message}: {message: string}) {

    return(
        <CardStyled>
            <h3>{message}</h3>
        </CardStyled>
    )
}