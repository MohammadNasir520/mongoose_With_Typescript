import { Request, NextFunction, Response } from "express";
import { createUserToDB, getUserFromDB } from "./user.service";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await createUserToDB();

  res.status(200).json({
    status: "success",
    data: user,
  });
};
export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const users = await getUserFromDB();

  res.status(200).json({
    status: "success",
    data: users,
  });
};
