import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

export const getChatUser = async (req, res) => {
    try {
        const userId = req.user._id;

        const filteredUser = await User.find({ _id: { $ne: userId } }).select("-password");
        return res.status(200).json({
            type: "success",
            message: "Chat Users Fetched Successfully!",
            data: filteredUser
        });

    } catch (error) {
        console.log("Error! UserController GetChatUser!", error.message);
        return res.status(500).json({
            type: "error",
            message: "Internal Server Error!"
        });
    }
}

export const updatePassword = async (req, res) => {
    try {

        const userId = req.user._id;
        const { currentPassword, newPassword, confirmPassword } = req.body;

        if (newPassword !== confirmPassword) {
            return res.status(400).json({
                type: "failure",
                message: "New Password and Confirm Password not matched!"
            });
        }

        const checkUser = await User.findById(userId);
        const checkPassword = await bcrypt.compare(currentPassword, checkUser?.password || "");

        if (!checkUser || !checkPassword) {
            return res.status(400).json({
                type: "failure",
                message: "Invalid Current Password!"
            });
        }

        const salt = await bcrypt.genSalt(8);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        const checkUpdate = await User.findByIdAndUpdate(userId, { $set: { password: hashedPassword } }, { new: true });

        if(checkUpdate){
            return res.status(200).json({
                type: "success",
                message: "Password Updated Successfully!"
            });
        }

    } catch (error) {
        console.log("Error! UserController UpdatePassword!", error.message);
        return res.status(500).json({
            type: "error",
            message: "Internal Server Error!"
        });
    }
}
