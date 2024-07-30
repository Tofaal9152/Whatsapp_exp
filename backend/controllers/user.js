import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { User } from "../models/user.js"
import { sendRequest } from "../utils/feature.js"

export const register = async (req, res) => {

    try {

        const { fullname, username, password, confirmpassword, gender } = req.body

        if (!fullname || !username || !password || !confirmpassword || !gender) {
            return sendRequest(res, 400, false, "All fields are required")
        } else if (password !== confirmpassword) {
            return sendRequest(res, 400, false, "Password does not match")
        }

        const hashPassword = await bcrypt.hash(password, 10)

        const profilePhotobyapi = `https://i.pravatar.cc/300?username=${username}`

        await User.create({
            fullname,
            username,
            password: hashPassword,
            profilePhoto: profilePhotobyapi,
            gender,
        })
        sendRequest(res, 201, true, "Registered successfully")
        
    } catch (error) {
        sendRequest(res, 500, false, "Internal server error")
        console.log(error);
    }
}

export const login = async (req, res) => {

    try {
        const { username, password} = req.body

        if (!username || !password) {
            return sendRequest(res, 400, false, "All fields are required")
        }
        
        const user =await User.findOne({username})
        if (!user) {
            return sendRequest(res, 400, false, "Invalid username or password")
        }
        const isPasswordMatch = await bcrypt.compare(password,user.password)
        if (!isPasswordMatch) {
            return sendRequest(res, 400, false, "Invalid password")
        }

        const tokenData = {
            userId:user._id
        }
        req.luda = tokenData
        const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY,{expiresIn:'1d'})
        res.status(200).cookie("token",token,{
            maxAge:1000*60*60*24,
            httpOnly:true,
            sameSite:"strict"
        }).json({
            success:true,  
            message:"cookies create successfully"
        })

 
    } catch (error) {
        sendRequest(res, 500, false, "Internal server error")
        console.log(error);   
    } 
}   

export const logout = async (req,res) =>{
    try {
        return res.status(200).cookie("token","",{maxAge:0}).json({
            success:true,
            message:"Log out successfully"
        })
    } catch (error) {
        sendRequest(res, 500, false, "Internal server error")
        console.log(error); 
    }
}

export const getOtheruser = async (req,res) =>{
    try {
        const loggedInUser = req.id.userId
        const otherUser = await User.find({_id:{$ne: loggedInUser}}).select("-password")
        return sendRequest(res,200,true,otherUser)
    } catch (error) {
        sendRequest(res, 500, false, "Internal server error getOtheruser")

    }
}