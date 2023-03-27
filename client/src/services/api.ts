import axios from "axios"

const token = localStorage.getItem("@gerenciador:token")

export const instance = axios.create({
    baseURL: "http://localhost:3001/",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
    }
})
