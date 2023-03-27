import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { instance } from "../services/api"
import axios from "axios"

import {ToastError, ToastSucess} from "../services/toast"
import { iFormLogin, iFormRegister, iUser, iUserContext, iUserContextProps } from "../interfaces"

export const UserContext = createContext({} as iUserContext)

export default function UserContextProvider({children}: iUserContextProps) {

    const navigate = useNavigate()
    const [user, setUser] = useState<iUser | null>(null)
    const [loading, setLoading] = useState(true)
    const [loadingDashboard, setLoadingDashboard] = useState(true)

    useEffect(() => {
        async function loadUser() {
            const token = localStorage.getItem("@gerenciador:token")
            if(token) {
                instance.defaults.headers.authorization = `Bearer ${token}`

                try {
                    const {data} = await instance.get("/profile")
                    setUser(data)
                } catch (error) {
                    console.log(error)
                }
            }
            setLoading(false)
            setLoadingDashboard(false)
        }

        loadUser()
    }, [])

    async function registerUser(dataForm: iFormRegister) {
        delete dataForm.confirmPassword

        try {
            const {data} = await instance.post("/users", dataForm)
            ToastSucess('Conta criada com sucesso!')
            navigate("/login")
            
        } catch (error) {
            console.log(error)

            if(axios.isAxiosError(error) && error.response) {
                if(error.response.data.message.includes("exists")) {
                    return ToastError('E-mail ou telefone já cadastrado!')
                }
            }

            ToastError('Ops, algo deu errado! Tente novamente.')
        }
    }

    async function loginFn(dataForm: iFormLogin) {
        setLoading(true)
        try {
            const {data} = await instance.post("/login", dataForm)
            ToastSucess('Login realizado com sucesso!')
            const {user: userResponse, token} = data

            instance.defaults.headers.authorization = `Bearer ${token}`
            
            setUser(userResponse)
            localStorage.setItem("@gerenciador:token", token)
    
            navigate("/dashboard", {replace: true})
        } catch (error) {
            console.log(error)
            ToastError('Verifique o email e senha e tente novamente!')
        }

        setLoading(false)
    }

    function logoutFn() {
        localStorage.removeItem("@gerenciador:token")
        setUser(null)
    }

    return(
        <UserContext.Provider value={{registerUser, loginFn, logoutFn, user, setUser, loading, setLoading, loadingDashboard}}>
            {children}
        </UserContext.Provider>
    )
}
