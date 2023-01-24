class UserDto {
    email
    name
    lastname
    surname
    course
    sex
    univer_id
    role
    id
    isActivated
    lead

    constructor(model) {
        this.email = model.email
        this.id = model.id
        this.isActivated = model.isActivated
        this.name = model.name
        this.lastname = model.lastname
        if(model.hasOwnProperty('surname')) {
            this.surname = model.surname
        }
        this.sex = model.sex
        if(model.hasOwnProperty('univer_id')) {
            this.univer_id = model.univer_id
        }
        if(model.hasOwnProperty('lead')) {
            this.lead = model.lead
        }
        this.role = model.role
    }
}

export default UserDto
