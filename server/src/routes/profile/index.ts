import { Router } from "express";
import { profileController } from "../../controllers";
import { validateAuthorizationMiddleware } from "../../middlewares";

const profileRoute = Router();

profileRoute.get("", validateAuthorizationMiddleware, profileController);

export { profileRoute };