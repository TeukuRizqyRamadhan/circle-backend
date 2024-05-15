import { Router } from "express";
import userRouter from "./userRouter";
import authRouter from "./authRouter";
import threadRoute from "./threadRouter";

const indexRouter = Router();

indexRouter.use("/user", userRouter);
indexRouter.use(authRouter);
indexRouter.use("/threads", threadRoute);

export default indexRouter;
