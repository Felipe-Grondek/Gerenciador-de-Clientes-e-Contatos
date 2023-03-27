import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { registerSchema } from "../../schemas/register";
import { iFormRegister } from "../../interfaces";

import { Container } from "../../components/Container";
import { FormStyled } from "../../components/Form";
import { ButtonStyled, LinkStyled } from "../../styles/Button";
import { Input, Label } from "../../styles/Input";
import { Header, Title } from "./style";
import { useNavigate } from "react-router-dom";

export default function Register() {

    const navigate = useNavigate()

    const token = localStorage.getItem("@Kenziehub:token")

    useEffect( () => {
        if(token) {
            return navigate("/dashboard")
        } 
    }, [])

    const {registerUser} = useContext(UserContext)

    const {register, handleSubmit, formState: {errors}} = useForm<iFormRegister>({
        resolver: yupResolver(registerSchema)
    })

    return (
        <Container styleType="center">
            <Header>
                <Title>Gerenciador de Contatos</Title>
                <LinkStyled btnstyle="grey" btnsize="big" to="/login">Voltar</LinkStyled>
            </Header>
            <FormStyled onSubmit={handleSubmit(registerUser)}>
                <h2 className="formTitle">Crie sua conta</h2>
                <p className="formDescription">Rapido e grátis</p>

                <Label htmlFor="firstName">Nome</Label>
                <Input type="text" id="firstName" placeholder="Digite aqui seu nome" {...register("firstName")} />
                <span>{errors.firstName?.message}</span>
                
                <Label htmlFor="lastName">Sobrenome</Label>
                <Input type="text" id="lastName" placeholder="Digite aqui seu sobrenome" {...register("lastName")} />
                <span>{errors.lastName?.message}</span>
                
                <Label htmlFor="email">Email</Label>
                <Input type="text" id="email" placeholder="Digite aqui seu email" {...register("email")}/>
                <span>{errors.email?.message}</span>

                <Label htmlFor="phone">Telefone</Label>
                <Input type="text" id="phone" placeholder="Digite aqui seu telefone" {...register("phone")}/>
                <span>{errors.phone?.message}</span>

                <Label htmlFor="password">Senha</Label>
                <Input type="password" id="password" placeholder="Digite aqui sua senha" {...register("password")}/>
                <span>{errors.password?.message}</span>

                <Label htmlFor="confirmPassword">Confirmar Senha</Label>
                <Input type="password" id="confirmPassword" placeholder="Digite novamente sua senha" {...register("confirmPassword")}/>
                <span>{errors.confirmPassword?.message}</span>

                <ButtonStyled type="submit">Cadastrar</ButtonStyled>
            </FormStyled>
        </Container>
    )
}