import taskService from "../service/task.service.js"

class TaskController {
    async add(req, res, next) {
        try {
            const {longitude, latitude} = req.body
            const title = (req.body.title) ?? null
            const description = (req.body.description) ?? null
            const userId1 = req.user.id

            const taskData = await taskService.add(userId1, longitude, latitude, title, description)
            return res.json(taskData)
        } catch (e) {
            next(e)
        }
    }

    async cancel(req, res, next) {
        const { taskId } = req.body

        const taskData = await taskService.cancel(taskId)
        return res.json(taskData)
    }

    async accept(req, res, next) {
        const { taskId } = req.body
        const userId2 = req.user.id
        const taskData = await taskService.accept(taskId, userId2)
        return res.json(taskData)
    }
}

export default new TaskController()