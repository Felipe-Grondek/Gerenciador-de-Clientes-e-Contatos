import { Router } from "express";
import { createContactController, deleteContactController, listContactsController, updateContactController } from "../../controllers";
import { isContactOwnerMiddleware, validateAuthorizationMiddleware, validatePayloadMiddleware, verifyContactInParamsExistsMiddleware } from "../../middlewares";
import { createContactSchema, updateContactSchema } from "../../schemas";

const contactRoutes = Router();

contactRoutes.post("", validateAuthorizationMiddleware, validatePayloadMiddleware(createContactSchema), createContactController);
contactRoutes.get("", validateAuthorizationMiddleware, listContactsController);
contactRoutes.patch("/:id", validateAuthorizationMiddleware, verifyContactInParamsExistsMiddleware, isContactOwnerMiddleware, validatePayloadMiddleware(updateContactSchema), updateContactController);
contactRoutes.delete("/:id", validateAuthorizationMiddleware, verifyContactInParamsExistsMiddleware, isContactOwnerMiddleware, deleteContactController);

export { contactRoutes };