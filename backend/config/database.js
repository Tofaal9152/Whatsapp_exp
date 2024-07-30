import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            dbName:"whatsApp"
        })
        console.log("Database connected")
    } catch (error) {
        console.error("Database connection error:");
    }
    
}
export default connectDB  