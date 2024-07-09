import express from "express";
import { getChatUser } from "../controllers/userController.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express();

router.get("/chat", checkAuth, getChatUser);

export default router;