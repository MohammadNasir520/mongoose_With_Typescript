import express from "express";

import { createUser, getUser } from "./user.controller";
const router = express.Router();

router.post("/create-user", createUser);

router.get("/", getUser);

export default router;
