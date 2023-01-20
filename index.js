import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import router from "./router/index.js"
import errorMiddleware from "./middlewares/error.middleware.js"
import sequelize from "./db/config.js"

dotenv.config()

const PORT = process.env.PORT || 5000
const app = express()


app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}))
app.use('/api', router)
app.use(errorMiddleware)

const start = async () => {
    try {
        await sequelize.sync({force: true})
            .then(() => console.log("DB connected successfully"))
        app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()
