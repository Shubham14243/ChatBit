import Chat from "../models/chatModel.js";
import Message from "../models/messageModel.js";

export const getMessage = async (req, res) => {
    try{
        const {id: chatUser} = req.params;
        const senderId = req.user._id;

        const chat = await Chat.findOne({
            participants: { $all: [senderId, chatUser] }
        }).populate("messages");

        if (!chat) {
            return res.status(200).json({
                type:"success",
                message:"Message Fetched Successfully!",
                data: []
            });
        }

        const data = chat.messages;
        
        return res.status(200).json({
            type:"success",
            message:"Message Fetched Successfully!",
            data
        });

    } catch (error) {
        console.log("Error! MessageController Get!", error.message);
        return res.status(500).json({
            type:"error",
            message:"Internal Server Error!"
        });
    }
}

export const sendMessage = async (req, res) => {
    try{
        const {message} = req.body;
        const {id: receiverId} = req.params;
        const senderId = req.user._id;

        let chat = await Chat.findOne({
            participants: { $all: [senderId, receiverId] },
        });

        if (!chat) {
            chat = await Chat.create({
                participants: [senderId, receiverId],
            });
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        });

        if (newMessage) {
            chat.messages.push(newMessage);
        }

        await Promise.all([chat.save(), newMessage.save()]);
        
        return res.status(201).json({
            type:"success",
            message:"Message Sent Successfully!",
            data: {
                newMessage
            }
        });

    } catch (error) {
        console.log("Error! MessageController Send", error.message);
        return res.status(500).json({
            type:"error",
            message:"Internal Server Error!"
        });
    }
}