import axios from "axios"

const token = localStorage.getItem("@gerenciador:token")

export const instance = axios.create({
    baseURL: "https://gerenciador-de-clientes-e-contatos.vercel.app/",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
    }
})
