/**
 * @swagger
 * components:
 *   schemas:
 *       User:
 *           type: object
 *           required:
 *           - email
 *           - password
 *           - name
 *           - lastname
 *           - sex
 *           properties:
 *               id:
 *                   type: integer
 *                   description: Уникальный идентификатор пользователя, генерируется автоматически
 *               email:
 *                   type: string
 *                   description: Email пользователя
 *               password:
 *                   type: string
 *                   description: Пароль пользователя
 *               isActivated:
 *                   type: boolean
 *                   description: Флаг, показывающий подтверждение почты
 *               name:
 *                   type: string
 *                   description: Имя пользователя
 *               lastname:
 *                   type: string
 *                   description: Фамилия пользователя
 *               surname:
 *                   type: string
 *                   description: Отчество пользователя (при наличии)
 *               sex:
 *                   type: string
 *                   description: Пол пользователя
 *           example:
 *               id: 1
 *               email: email@email.com
 *               password: $2b$04$foT1uiXTiYEREL1aoJvq5OHdK0y7XnUT/2908BbmqmA1rKo.IRkOK
 *               isActivated: false
 *               name: Иван
 *               lastname: Иванов
 *               surname: Иванович
 *               sex: муж
 */
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
