import { Request, Response } from "express";
import * as likeService from "../services/likeService";
import * as threadService from "../services/threadService";
import { errorHandler } from "../utils/errorHandler";
import { log } from "console";

export const createLike = async (req: Request, res: Response) => {
    try {
        console.log(req.body)
        const threadId = req.params.threadId;
        const userId = res.locals.userId;
        const like = await likeService.createLike(userId, threadId);
        res.json({
            success: true,
            message: like,
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            error: error,
        });
    }
};

export const getLikes = async (req: Request, res: Response) => {
    try {
        const threadId = req.params.threadId;
        const likes = await likeService.getLikes(threadId);

        const thread = await threadService.getThread(threadId); // Misalnya, gunakan model Thread untuk mencari thread dengan ID tertentu

        if (!thread) {
            return res.status(404).json({
                success: false,
                message: "Thread tidak ditemukan",
            });
        }
        if (!likes || likes.length === 0) {
            return res.json({
                message: "thread belum ada likenya bosku",
            })
        }
        res.status(200).json({
            success: true,
            message: likes,
        })
    } catch (error) {
        const err = error as unknown as Error;
        console.log(err);

        res.status(500).json({
            status: false,
            message: err.message,
        })
    }
}

export const getCurrentLike = async (req: Request, res: Response) => {
    try {
        const threadId = req.params.threadId;
        const userId = res.locals.userId;
        console.log(threadId);
        console.log(userId);

        const thread = await threadService.getThread(threadId); // Misalnya, gunakan model Thread untuk mencari thread dengan ID tertentu

        if (!thread) {
            return res.status(404).json({
                success: false,
                message: "Thread tidak ditemukan",
            });
        }

        const like = await likeService.getCurrentLike(threadId, userId);

        if (!like) {
            return res.json({
                message: "belum di like bosku",
            })
        }
        res.json({
            success: true,
            message: "Sudah di like bosku",
            like: like
        })
    } catch (error) {
        const err = error as unknown as Error;
        console.log(err);
    }
}