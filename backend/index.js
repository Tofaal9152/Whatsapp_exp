import dotenv from 'dotenv'
import express from 'express'
import cookieParser from 'cookie-parser'
import userRouter from './routes/user.js'
import messageRouter from './routes/message.js'
import connectDB from './config/database.js'
dotenv.config({})
const app = express()
const port = process.env.PORT || 5050

// middleware
app.use(express.json())
app.use(cookieParser())
// routes
app.use("/api/v1/user", userRouter)
app.use("/api/v1/message", messageRouter)


app.listen(port, () => {
    connectDB()
    console.log(`app is running on port ${port}`)
}) 