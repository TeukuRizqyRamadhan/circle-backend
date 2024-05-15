import { Request, Response } from "express";
import * as followService from "../services/followService";
import { errorHandler } from "../utils/errorHandler";

export const follow = async (req: Request, res: Response) => {
    try {
        console.log(req.body)
        const followingId = req.params.followingId;
        const followedById = res.locals.userId;
        const follow = await followService.follow(followedById, followingId);
        res.json({
            success: true,
            message: follow,
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            error: error,
        });
    }
};

export const getFollowers = async (req: Request, res: Response) => {
    try {
        const userId = res.locals.userId;

        const followers = await followService.getFollowers(userId);
        res.json({
            success: true,
            total: followers.length,
            followers: followers
        })
    } catch (error) {
        console.log(error)

        res.status(500).json({
            success: false,
            error: error
        })
    }
}

export const getFollowing = async (req: Request, res: Response) => {
    try {
        const userId = res.locals.userId;
        const following = await followService.getFollowing(userId);
        res.json({
            success: true,
            total: following.length,
            message: following,
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            error: error
        })
    }
}