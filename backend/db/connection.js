import mongoose from "mongoose";

const connectToDb = async () => {
    try{
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connected to DB!")
    } catch (error){
        console.log("Error Connecting to DB!", error.message);
    }
}

export default connectToDb;