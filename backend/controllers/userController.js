import User from "../models/userModel.js";

export const getChatUser = async (req, res) => {
    try{
        const userId = req.user._id;

        const filteredUser = await User.find({ _id: {$ne: userId}}).select("-password");
        return res.status(200).json({
            type:"success",
            message:"Chat Users Fetched Successfully!",
            data: filteredUser
        });

    } catch (error) {
        console.log("Error! UserController GetChatUser!", error.message);
        return res.status(500).json({
            type:"error",
            message:"Internal Server Error!"
        });
    }
}