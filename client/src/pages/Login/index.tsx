import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { iFormLogin } from "../../interfaces";
import { loginSchema } from "../../schemas/login";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import { Container } from "../../components/Container";
import { FormStyled } from "../../components/Form";
import { ButtonStyled, LinkStyled } from "../../styles/Button";
import { Input, Label } from "../../styles/Input";
import { Title } from "./style";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate()

    const token = localStorage.getItem("@Kenziehub:token")

    useEffect( () => {
        if(token) {
            return navigate("/dashboard")
        } 
    }, [])

    const {loginFn} = useContext(UserContext)

    const [showPassword, setShowPassword] = useState(false)

    const {register, handleSubmit, formState: {errors}} = useForm<iFormLogin>({
        resolver: yupResolver(loginSchema)
    })

    return (

        <Container styleType="center">
            <Title>Gerenciador de Contatos</Title>
            <FormStyled onSubmit={handleSubmit(loginFn)}>
                <h2 className="formTitle">Login</h2>
                
                <Label htmlFor="email">Email</Label>
                <Input type="text" id="email" placeholder="Digite o seu email" {...register("email")}/>
                <span>{errors.email?.message}</span>

                <div>
                    <Label htmlFor="password">Senha</Label>
                    <Input type={showPassword ? "text" : "password"} id="password" placeholder="Digite a sua senha" {...register("password")}/>
                    {!showPassword ? <AiFillEye className="icon" onClick={() => setShowPassword(!showPassword)}/> : <AiFillEyeInvisible className="icon" onClick={() => setShowPassword(!showPassword)} />}
                </div>
                <span>{errors.password?.message}</span>

                <ButtonStyled type="submit">Entrar</ButtonStyled>

                <p className="formDescription">Ainda não possui uma conta?</p>
                <LinkStyled btnstyle="grey-light" to={"/register"}>Cadastre-se</LinkStyled>
            </FormStyled>
        </Container>
    )
}
