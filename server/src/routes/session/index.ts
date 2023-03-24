import { Router } from "express";
import { createSessionController } from "../../controllers";
import { validatePayloadMiddleware, verifyUserExistsMiddleware } from "../../middlewares";
import { createSessionSchema } from "../../schemas";

const sessionRoute = Router();

sessionRoute.post("", validatePayloadMiddleware(createSessionSchema), verifyUserExistsMiddleware, createSessionController);

export { sessionRoute };