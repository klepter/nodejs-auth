import {Router} from "express"
import authMiddleware from "../middlewares/auth.middleware.js"
import taskController from "../controllers/task.controller.js"

const taskRouter = new Router()

taskRouter.post('/add', authMiddleware, taskController.add)
taskRouter.post('/cancel', authMiddleware, taskController.cancel)
taskRouter.post('/accept', authMiddleware, taskController.accept)

export default taskRouter