import { Router } from "express";
import authentication from "../middlewares/authentication";
import * as likeController from "../controllers/likeController";

const likeRoute = Router();

likeRoute.post("/:threadId", authentication, likeController.createLike);
likeRoute.get("/:threadId", authentication, likeController.getLikes);
likeRoute.get("/current/:threadId", authentication, likeController.getCurrentLike);

export default likeRoute