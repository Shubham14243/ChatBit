import express from "express";
import { getChatUser, updatePassword } from "../controllers/userController.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express();

router.get("/chat", checkAuth, getChatUser);

router.post("/password/update", checkAuth, updatePassword);

export default router;