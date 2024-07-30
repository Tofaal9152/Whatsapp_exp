import { Conversation } from "../models/conversation.js";
import { Message } from "../models/message.js";
import { User } from "../models/user.js";
import { sendRequest } from "../utils/feature.js";


export const sendMessage = async (req, res) => {
    try {
        const senderId = req.id.userId;
        const receiverId = req.params.id
        const { message } = req.body

        const sender = await User.findById(senderId)
        const receiver = await User.findById(receiverId)
        if (!sender || !receiver) {
            return sendRequest(res, 400, false, "Sender or Receiver not found")
        }

        let gotConversation = await Conversation.findOne({ participents: { $all: [senderId, receiverId] } })
        if (!gotConversation) {
            gotConversation = await Conversation.create({ participents: [senderId, receiverId] })
        }

        const newMessage = await Message.create({
            senderId,
            receiverId,
            message
        })
        if (newMessage) {
            gotConversation.messages.push(newMessage._id)
        }
        await gotConversation.save()
        // SOCKET Io
        sendRequest(res, 201, true, "working")
    } catch (error) {
        console.log(error);
        sendRequest(res, 400, false, "internal server error sendmessage")

    }
}
export const getMessage = async (req, res) => {
    try {
        const senderId = req.id.userId;
        const receiverId = req.params.id

        const conversation = await Conversation.findOne({
            participents: { $all: [senderId, receiverId] }
        }).populate("messages")

        console.log(conversation);
        sendRequest(res, 201, true, "working getMessage")
    } catch (error) {
        sendRequest(res, 400, false, "internal server error getMessage")

    }
}