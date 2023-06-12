import { Request, NextFunction, Response } from "express";
import { createUserToDB } from "./user.service";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // inserting a test data into mongodb
  /*
step:1 interface
step2: Schema
step3: Model
step4: Database query

*/

  const user = await createUserToDB();

  res.status(200).json({
    status: "success",
    data: user,
  });
};
