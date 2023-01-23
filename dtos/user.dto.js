class UserDto {
    email
    name
    lastname
    birthday
    sex
    univer_id
    role
    id
    isActivated

    constructor(model) {
        this.email = model.email
        this.id = model.id
        this.isActivated = model.isActivated
        this.name = model.name
        this.lastname = model.lastname
        if(model.hasOwnProperty('birthday')) {
            this.birthday = model.birthday
        }
        this.sex = model.sex
        if(model.hasOwnProperty('univer_id')) {
            this.univer_id = model.univer_id
        }
        this.role = model.role
    }
}

export default UserDto
