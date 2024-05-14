import { Request, Response } from "express";
import * as userService from "../services/userService";

export const getUser = async (req: Request, res: Response) => {
   try {
      const { params } = req;
      const { userId } = params;

      const dataUser = await userService.getUser(userId);

      res.status(200).json(dataUser);
   } catch (error) {
      console.log(error);

      const err = error as unknown as Error;

      res.status(500).json({
         message: err.message,
      });
   }
};

export const createUser = async (req: Request, res: Response) => {
   try {
      const { body } = req;

      const dataInsertUser = await userService.insertUser(body);

      res.status(200).json(dataInsertUser);
   } catch (error) {
      console.log(error);

      const err = error as unknown as Error;

      res.status(500).json({
         message: err.message,
      });
   }
};

export const deleteUser = async (req: Request, res: Response) => {
   try {
      const { params } = req;
      const { userId } = params;

      const messageDeleteUser = await userService.deleteUser(userId);

      res.status(200).json({ message: messageDeleteUser });
   } catch (error) {
      console.log(error);

      const err = error as unknown as Error;

      res.status(500).json({
         message: err.message,
      });
   }
};
