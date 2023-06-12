import { Request, NextFunction, Response } from "express";
import {
  createUserToDB,
  getAdminUsersFromDB,
  getUserByIdFromDB,
  getUserFromDB,
} from "./user.service";

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

export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  const user = await getUserByIdFromDB(id);

  res.status(200).json({
    status: "success",
    data: user,
  });
};

export const getAdminUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await getAdminUsersFromDB();

  res.status(200).json({
    status: "success1",
    data: user,
  });
};
