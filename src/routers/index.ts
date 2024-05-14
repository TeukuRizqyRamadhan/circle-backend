import { Router } from "express";
import userRouter from "./userRouter";
import authRouter from "./authRouter";

const indexRouter = Router();

indexRouter.use("/user", userRouter);
indexRouter.use(authRouter);

export default indexRouter;
