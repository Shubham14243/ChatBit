import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectToDb from "./db/connection.js"
import cors from 'cors';
import { app, server } from "./socket/socket.js";

import authRoutes from "./routes/authRoute.js";
import messageRoutes from "./routes/messageRoute.js";
import userRoutes from "./routes/userRoute.js";

// const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();


dotenv.config();


app.use(express.json());
app.use(cookieParser());


app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/user", userRoutes);


app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"))
});


server.listen(PORT, () => {
    connectToDb();
    console.log(`Server Running! PORT = ${PORT}`);
})