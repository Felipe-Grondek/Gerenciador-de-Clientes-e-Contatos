import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

import { Title } from "../Register/style";
import { Container } from "../../components/Container";
import  ContactCard, { EmptyCard }  from "../../components/ContactCard";
import { ButtonStyled, LinkStyled } from "../../styles/Button";
import { Header, Main, NavStyled, ContactList } from "./style";

import EditContactModal from "../../components/EditContactModal";
import {AnimatePresence, motion} from "framer-motion";
import { ContactContext } from "../../contexts/ContactContext";
import AddContactModal from "../../components/AddContactModal";

export default function Dashboard() {

    const navigate = useNavigate()
    const token = localStorage.getItem("@gerenciador:token")

    useEffect( () => {
        if(!token) {
            return navigate("/login")
        } 
    }, [])

    const {logoutFn, user, loadingDashboard} = useContext(UserContext)
    const {modalOpen, openModal, modalEditOpen} = useContext(ContactContext)

    if(loadingDashboard) {
        return null
    }

    if(user === null) {
        return null
    }

    return (
        <>
            <NavStyled>
                <Container>
                    <Title>Gerenciador de Contatos</Title>
                    <LinkStyled btnstyle="grey" btnsize="big" onClick={logoutFn} to="/login">Sair</LinkStyled>
                </Container>
            </NavStyled>
            <Header>
                <Container>
                    <h2>Olá, {user?.firstName}</h2>
                    <h3>{user?.email}</h3>
                </Container>
            </Header>
            <Main>
                <Container>
                    <h2>Contatos</h2>
                    <ButtonStyled onClick={() => openModal()} btnSize="small" btnStyle="grey">+</ButtonStyled>
                    <AnimatePresence>
                    {modalOpen && 
                        <motion.div 
                            style={{position: "absolute"}}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                        >
                            <AddContactModal />
                        </motion.div>}
                        {modalEditOpen && 
                        <motion.div 
                            style={{position: "absolute"}}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                        >
                            <EditContactModal />
                        </motion.div>}
                    </AnimatePresence>
                    <ContactList>
                        {user.contacts.length < 1 ?
                            <EmptyCard message="Nenhum contato foi adicionado!" /> 
                            :
                            user.contacts.map((contact) => {
                            return <ContactCard 
                            key={contact.id} 
                            id={contact.id}
                            firstName={contact.firstName} 
                            lastName={contact.lastName}
                            email={contact.email}
                            phone={contact.phone}
                            />
                        })}
                    </ContactList>
                </Container>
            </Main>
        </> 
    )
}
