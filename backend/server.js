import express from "express";
import dotenv from "dotenv";
import connectToDb from "./db/connection.js"

import authRoutes from "./routes/authRoute.js";

const app = express();
const PORT = process.env.PORT || 5000;



dotenv.config();


app.use(express.json());
app.use("/api/auth", authRoutes);


app.listen(PORT, () => {
    connectToDb();
    console.log(`Server Running! PORT = ${PORT}`);
})