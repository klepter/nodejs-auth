import TaskModel from "../models/task.model.js"
import TaskDto from "../dtos/task.dto.js"

class TaskService {
    async add(userId1, longitude, latitude, title, description) {
        const task = await TaskModel.create({title, description, latitude, longitude, userId1})
        const taskDto = new TaskDto(task)
        return {task: taskDto}
    }

    async cancel(taskId) {
        const task = await TaskModel.destroy({where: {id: taskId}})
        const taskDto = new TaskDto(task)
        return {task: taskDto}
    }

    async accept(taskId, userId2) {
        const task = await TaskModel.findOne({where: {id: taskId}})
        task.userId2 = userId2
        return task.save()
    }
}

export default new TaskService()