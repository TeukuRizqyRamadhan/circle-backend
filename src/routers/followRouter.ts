import { Router } from "express";
import * as followController from "../controllers/followController";
import authentication from "../middlewares/authentication";

const followRoute = Router();

followRoute.post("/follow/:followingId", authentication, followController.follow);
followRoute.get("/follow/getFollowers", authentication, followController.getFollowers);
followRoute.get("/follow/getFollowing", authentication, followController.getFollowing);

export default followRoute 