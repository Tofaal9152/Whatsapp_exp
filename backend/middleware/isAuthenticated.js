import jwt from "jsonwebtoken"
import { sendRequest } from "../utils/feature.js";

export const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookies.token
        if (!token) {
            return sendRequest(res, 400, false, "user not authenticated in isAuthenticated")
        }
        const decode = await jwt.verify(token, process.env.JWT_SECRET_KEY)
        if (!decode) {
            return sendRequest(res, 400, false, "Invalid token in isAuthenticated")
        }
        req.id = decode   
        next()
    } catch (error) {
        sendRequest(res, 500, false, "Internal server error isAuthenticated")
    }
}