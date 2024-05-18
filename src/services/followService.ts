import { Follow } from "@prisma/client";
import db from "../lib/db";

export const follow = async (followedById: string, followingId: string) => {
    const existingFollow = await db.follow.findFirst({
        where: {
            followedById: followingId,
            followingId: followedById
        }
    })

    if (existingFollow) {
        await db.follow.deleteMany({
            where: {
                followedById: followingId,
                followingId: followedById
            }
        })
        return ("unfollow sukses")
    }

    await db.follow.create({
        data: {
            followedById: followingId,
            followingId: followedById
        }
    })
    return ("follow sukses")
}

export const getFollowers = async (followingId: string) => {
    return await db.follow.findMany({
        where: {
            followedById: followingId
        },
        select: {
            following: true
        }
    })
}

export const getFollowing = async (followedById: string) => {
    return await db.follow.findMany({
        where: {
            followingId: followedById
        },
        select: {
            followedBy: true
        }
    })
}