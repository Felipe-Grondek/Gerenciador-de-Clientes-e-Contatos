import { Router } from "express";
import { createUserController, deleteUserController, getAllUsersController, updateUserController } from "../../controllers";
import { isAccountOwnerMiddleware, validateAuthorizationMiddleware, validatePayloadMiddleware, verifyUserInParamsExistsMiddleware } from "../../middlewares";
import { createUserSchema, updateUserSchema } from "../../schemas";

const userRoutes = Router();

userRoutes.post("", validatePayloadMiddleware(createUserSchema), createUserController);

userRoutes.get("", validateAuthorizationMiddleware, getAllUsersController);

userRoutes.patch("/:id", validateAuthorizationMiddleware, verifyUserInParamsExistsMiddleware, isAccountOwnerMiddleware, validatePayloadMiddleware(updateUserSchema), updateUserController)

userRoutes.delete("/:id", validateAuthorizationMiddleware, verifyUserInParamsExistsMiddleware, isAccountOwnerMiddleware, deleteUserController)

export { userRoutes };