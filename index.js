import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import userRouter from "./routers/user.router.js"
import errorMiddleware from "./middlewares/error.middleware.js"
import sequelize from "./db/config.js"
import taskRouter from "./routers/task.router.js"

dotenv.config()

const PORT = process.env.PORT || 5000
const app = express()


app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}))
app.use('/api', userRouter)
app.use('/api/task', taskRouter)
app.use(errorMiddleware)

const start = async () => {
    try {
        await sequelize.sync()
            .then(() => console.log("DB connected successfully"))
        app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()
