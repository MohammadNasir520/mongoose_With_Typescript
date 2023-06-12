import express from "express";

import {
  createUser,
  getAdminUsers,
  getUser,
  getUserById,
} from "./user.controller";
const router = express.Router();

router.post("/create-user", createUser);

router.get("/", getUser);
router.get("/admins", getAdminUsers);
router.get("/:id", getUserById);

export default router;
