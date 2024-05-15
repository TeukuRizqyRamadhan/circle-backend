// import { Request, Response } from "express";
// import * as replyService from "../services/replyService"
// import { errorHandler } from "../utils/errorHandler";

// export const createReply = async (req: Request, res: Response) => {
//     try {
//         console.log(req.body)
//         const threadId = req.params.threadId;
//         console.log(req.params)
//         const author = res.locals.userId;
//         const reply = await replyService.createReply(author, threadId);
//         res.json({
//             success: true,
//             message: reply,
//         });
//     } catch (error) {
//         console.log(error);
//         errorHandler(error, res);
//     }
// }