import { Router } from "express";
import userRouter from "./userRouter";
import authRouter from "./authRouter";
import threadRoute from "./threadRouter";
import followRoute from "./followRouter";
import likeRoute from "./likeRouter";
// import replyRoute from "./replyRouter";

const indexRouter = Router();

indexRouter.use(userRouter);
indexRouter.use(authRouter);
indexRouter.use("/threads", threadRoute);
indexRouter.use(followRoute);
indexRouter.use("/like", likeRoute);
// indexRouter.use("/reply", replyRoute);

export default indexRouter;
