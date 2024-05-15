import { Router } from "express";
import * as userController from "../controllers/userController";
import authentication from "../middlewares/authentication";

const userRouter = Router();

userRouter.get("/user/:userId", authentication, userController.getUser);
userRouter.post("/user", userController.createUser);
userRouter.delete("/user/:userId", userController.deleteUser);
userRouter.put("/user/:userId", userController.updateUser);
userRouter.get("/users", userController.getAllUser);

export default userRouter;
