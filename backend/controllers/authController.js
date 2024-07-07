import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import generateToken from "../util/authToken.js";

export const signup = async (req, res) => {
    try{
        const { name, email, password, confirmpassword, gender } = req.body;

        if (password !== confirmpassword) {
            return res.status(400).json({
                type:"failure",
                message:"Password and Confirm Password don't match!"
            });
        }

        const user = await User.findOne({email});

        if (user) {
            return res.status(400).json({
                type:"failure",
                message:"User Already Exists!"
            });
        }

        const boyPic = `https://avatar.iran.liara.run/public/boy?username=${email}`;
        const girlPic = `https://avatar.iran.liara.run/public/girl?username=${email}`;

        const salt = await bcrypt.genSalt(8);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            name: name,
            email:email,
            password:hashedPassword,
            gender: gender,
            picture: gender === "male" ? boyPic : girlPic
        });

        generateToken(newUser._id, res);
        
        await newUser.save();

        return res.status(201).json({
            type:"success",
            message:"User SignedUp Successfully!",
            data: {
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                picture: newUser.picture
            }
        });

    } catch (error) {
        console.log("Error! AuthController Signup!", error.message);
        return res.status(500).json({
            type:"error",
            message:"Internal Server Error!"
        });
    }
};

export const login = async (req, res) => {
    try{
        const { email, password } = req.body;

        const user = await User.findOne({email});
        const checkPassword = await bcrypt.compare(password, user?.password || "");

        if (!user || !checkPassword) {
            return res.status(400).json({
                type:"failure",
                message:"Invalid Username or Password!"
            });
        }

        generateToken(user._id, res);

        return res.status(200).json({
            type:"success",
            message:"User Logged In Successfully!",
            data: {
                _id: user._id,
                name: user.name,
                email: user.email,
                picture: user.picture
            }
        });

    } catch (error) {
        console.log("Error! AuthController Login!", error.message);
        return res.status(500).json({
            type:"error",
            message:"Internal Server Error!"
        });
    }
};

export const logout = (req, res) => {
    try{
        res.cookie("jwt", "", {maxAge:0});
        
        return res.status(200).json({
            type:"success",
            message:"User Logged Out Successfully!"
        });
    } catch (error) {
        console.log("Error! AuthController Logout!", error.message);
        return res.status(500).json({
            type:"error",
            message:"Internal Server Error!"
        });
    }
};