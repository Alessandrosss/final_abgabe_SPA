import express from "express";
import { register, login, getUsers } from "../controller/userController.js";

const router = express.Router();

router.get("/users", getUsers);
router.post("/user/register", register);
router.post("/user/login", login);

export default router;
