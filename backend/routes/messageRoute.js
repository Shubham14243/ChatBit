import express from "express";
import { getMessage, sendMessage } from "../controllers/messageController.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express();

router.get("/:id", checkAuth, getMessage);
router.post("/send/:id", checkAuth, sendMessage);

export default router;