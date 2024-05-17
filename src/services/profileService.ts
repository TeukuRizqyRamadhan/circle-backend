import db from "../lib/db";
import { IProfile } from "../types/app";

export const updateProfile = async (
    userId: string,
    body: IProfile,
    files: { [fieldname: string]: Express.Multer.File[] }
) => {
    try {
        const cover = files?.cover?.[0]?.filename;
        const avatar = files?.avatar?.[0]?.filename;

        if (cover) {
            body.cover = cover;
        }

        if (avatar) {
            body.avatar = avatar;
        }
        const updatedProfile = await db.profile.update({
            where: { userId },
            data: body,
            select: {
                id: true,
                username: true,
                bio: true,
                avatar: true,
                cover: true
            },
        });

        return updatedProfile;
    } catch (error) {
        throw error;
    }
};




export const getProfile = async (userId: string) => {


    const existProfile = await db.profile.findFirst({
        where: {
            userId: userId
        }, include: {
            user: true
        }
    })

    if (!existProfile) {
        throw new Error("Profile not found");
    }

    return existProfile
}