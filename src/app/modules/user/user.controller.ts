import { Request, NextFunction, Response } from "express";
import { createUserToDB, getUserFromDB } from "./user.service";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;

  const user = await createUserToDB(data);

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
