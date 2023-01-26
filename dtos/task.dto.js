class TaskDto {
    id
    title
    description
    longitude
    latitude
    userId1
    userId2

    constructor(model) {
        this.id = model.id
        if(model.hasOwnProperty('title')) {
            this.title = model.title
        }
        if(model.hasOwnProperty('description')) {
            this.description = model.description
        }
        this.longitude = model.longitude
        this.latitude = model.latitude
        this.userId1 = model.userId1
        if(model.hasOwnProperty('userId2')) {
            this.userId2 = model.userId2
        }
    }
}

export default TaskDto
