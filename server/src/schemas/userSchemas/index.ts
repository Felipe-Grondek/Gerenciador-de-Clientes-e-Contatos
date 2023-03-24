import * as yup from "yup";
import { userReturnSchema } from "../sessionSchemas";

const createUserSchema = yup.object().shape({
    email: yup.string().email().max(127).required(),
    password: yup.string().max(127).required(),
    firstName: yup.string().max(32).required(),
    lastName: yup.string().max(32).required(),
    phone: yup.string().max(11).required(),
})

const usersListReturnSchema = yup.array(userReturnSchema);

const updateUserSchema = yup.object().shape({
    firstName: yup.string().max(32).notRequired(),
    lastName: yup.string().max(32).notRequired(),
    password: yup.string().max(127).notRequired(),
    phone: yup.string().max(11).notRequired()
})

export { createUserSchema, usersListReturnSchema, updateUserSchema };