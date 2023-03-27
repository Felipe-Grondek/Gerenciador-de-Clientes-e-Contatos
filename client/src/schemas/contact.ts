import * as yup from "yup"

export const contactSchema = yup.object().shape({
    firstName: yup.string().required("Nome é obrigatório").min(3, "O nome deve ter no minimo 3 caracteres"),

    lastName: yup.string().required("Nome é obrigatório").min(3, "O nome deve ter no minimo 3 caracteres"),

    email: yup.string().email("Email passado é inválido").required("Email é obrigatório"),

    phone: yup.string().required("Telefone é obrigatório"),
})
