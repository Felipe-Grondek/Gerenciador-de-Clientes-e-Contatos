import { Router } from "express";
import { createContactController } from "../../controllers";
import { validateAuthorizationMiddleware, validatePayloadMiddleware } from "../../middlewares";
import { createContactSchema } from "../../schemas";

const contactRoutes = Router();

contactRoutes.post("", validateAuthorizationMiddleware, validatePayloadMiddleware(createContactSchema), createContactController);

export { contactRoutes };