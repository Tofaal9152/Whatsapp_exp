import mongoose from "mongoose";

const messageModel = new mongoose.Schema({
    sendId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    receiverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    message:{
        type:String,
        required:true,
    }
}, { timestamps: true })
export const Message = mongoose.model("Message",messageModel) 