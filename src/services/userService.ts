import { User } from "@prisma/client";
import db from "../lib/db";

export const getUser = async (id: string): Promise<User | null> => {
   return db.user.findFirst({
      where: {
         id,
      },
   });
};

export const insertUser = async (body: User): Promise<User> => {
   return db.user.create({
      data: body,
   });
};

export const deleteUser = async (id: string): Promise<string> => {
   const existUser = await db.user.findFirst({
      where: {
         id,
      },
   });

   if (!existUser) {
      throw new Error("User tidak ditemukan!");
   }

   await db.user.delete({
      where: {
         id,
      },
   });

   return "Sukses delete user dengan id " + id;
};
