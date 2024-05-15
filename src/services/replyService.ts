// import { Thread } from "@prisma/client";
// import db from "../lib/db"
// import { ERROR_MESSAGE } from "../utils/constant/error";

// export const createReply = async (body: Thread, threadId: string) => {

//     const existingThread = await db.thread.findFirst({
//         where: {
//             id: threadId
//         }
//     })

//     if (!existingThread) {
//         throw new Error(ERROR_MESSAGE.DATA_NOT_FOUND)
//     }

//     const reply = await db.thread.create({
//         data: body
//     })

//     return reply
// }