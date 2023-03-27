import * as yup from "yup"

export const registerSchema = yup.object().shape({
    firstName: yup.string().required("Nome é obrigatório").min(3, "O nome deve ter no minimo 3 caracteres"),

    lastName: yup.string().required("Nome é obrigatório").min(3, "O nome deve ter no minimo 3 caracteres"),

    email: yup.string().email("Email passado é inválido").required("Email é obrigatório"),

    phone: yup.string().required("Telefone é obrigatório"),

    password: yup.string().required("Senha é obrigatória").min(8, "A senha deve ter no minimo 8 caracteres").matches(new RegExp("^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$"), "A senha deve ter letras maiusculas e minusculas, números e pelo menos um símbolo especial (!#@$%&)"),

    confirmPassword: yup.string().oneOf([yup.ref("password")], "As senhas devem ser iguais"),
})
