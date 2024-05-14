import { Router } from "express";
import * as userController from "../controllers/userController";

const userRouter = Router();

userRouter.get("/:userId", userController.getUser);
userRouter.post("/", userController.createUser);
userRouter.delete("/:userId", userController.deleteUser);

export default userRouter;
