import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const checkAuth = async (req, res, next) => {
    try{
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({
                type:"failure",
                message:"Unauthorized Access! Token Unavailable!"
            });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({
                type:"failure",
                message:"Unauthorized Access! Token Invalid!"
            });
        }
        const user = await User.findById(decoded.userId).select("-password");
        if (!user) {
            return res.status(404).json({
                type:"failure",
                message:"Unauthorized Access! User Not Found!"
            });
        }
        req.user = user;
        next();
    } catch (error) {
        console.log("Error! CheckAuth!", error.message);
        return res.status(500).json({
            type:"error",
            message:"Internal Server Error!"
        });
    }
}

export default checkAuth;