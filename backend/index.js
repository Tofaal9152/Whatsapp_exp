import dotenv from 'dotenv'
import express from 'express'
import connectDB from './config/database.js'
import userRouter from './routes/userRouter.js'
import cookieParser from 'cookie-parser'

dotenv.config({})

const app = express()
const port = process.env.PORT || 5050

// middleware
app.use(express.json())
app.use(cookieParser())
// routes
app.use("/api/v1/user", userRouter) //http://localhost:8000/api/v1/user/register

app.listen(port, () => {
    connectDB()
    console.log(`app is running on port ${port}`)
}) 