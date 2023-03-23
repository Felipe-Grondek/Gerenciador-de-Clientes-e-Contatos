import { Router } from "express";
import { createSessionController } from "../../controllers/createSession";
import { validatePayloadMiddleware } from "../../middlewares";
import { createSessionSchema } from "../../schemas";

const sessionRoute = Router();

sessionRoute.post("", validatePayloadMiddleware(createSessionSchema), createSessionController);

export { sessionRoute };