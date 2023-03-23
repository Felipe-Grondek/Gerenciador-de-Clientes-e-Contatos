import * as yup from "yup";

const createSessionSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
});

const userReturnSchema = yup.object().shape({
    updatedAt: yup.date(),
    createdAt: yup.date(),
    secondaryPhone: yup.string(),
    primaryPhone: yup.string(),
    lastName: yup.string(),
    firstName: yup.string(),
    secondaryEmail: yup.string().email(),
    primaryEmail: yup.string().email(),
    id: yup.string().uuid(),
})



export { createSessionSchema, userReturnSchema };
