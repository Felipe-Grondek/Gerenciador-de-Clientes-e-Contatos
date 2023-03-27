import * as yup from "yup";

const createContactSchema = yup.object().shape({
    email: yup.string().email().max(127).required(),
    firstName: yup.string().max(32).required(),
    lastName: yup.string().max(32).required(), 
    phone: yup.string().max(11).required()
});

const updateContactSchema = yup.object().shape({
    email: yup.string().email().max(127).notRequired(),
    firstName: yup.string().max(32).notRequired(),
    lastName: yup.string().max(32).notRequired(), 
    phone: yup.string().max(11).notRequired()
});

export {
    createContactSchema,
    updateContactSchema,
}