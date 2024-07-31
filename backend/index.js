import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import userRouter from './routes/user.js'
import messageRouter from './routes/message.js'
import connectDB from './config/database.js'
dotenv.config({})

const app = express()
const port = process.env.PORT || 5050
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
};

// Middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions));


// Routes
app.use("/api/v1/user", userRouter)
app.use("/api/v1/message", messageRouter)

app.listen(port, () => {
    connectDB()
    console.log(`app is running on port ${port}`)
}) 