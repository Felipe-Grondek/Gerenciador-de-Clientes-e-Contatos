import * as yup from "yup";

const createSessionSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
});

const userReturnSchema = yup.object().shape({
    contacts: yup.array(),
    updated_at: yup.date(),
    created_at: yup.date(),
    phone: yup.string(),
    lastName: yup.string(),
    firstName: yup.string(),
    email: yup.string().email(),
    id: yup.string().uuid(),
})



export { createSessionSchema, userReturnSchema };
