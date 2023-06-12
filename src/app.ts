import express from "express";
import cors from "cors";
import { Application } from "express-serve-static-core";
import userRoutes from "./app/modules/user/user.routes";

const app: Application = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRoutes);

export default app;
