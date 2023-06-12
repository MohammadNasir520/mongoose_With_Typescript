import express from "express";
import cors from "cors";
import { Application, Request, Response } from "express-serve-static-core";
import { NextFunction } from "connect";

const app: Application = express();

// using cors
app.use(cors());

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("mongoose milestone server is running ");
});

export default app;
