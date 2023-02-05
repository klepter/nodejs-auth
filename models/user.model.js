import {DataTypes, Model} from "sequelize"
import sequelize from "../db/config.js"

class User extends Model {}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isActivated: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    activationLink: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    surname: {
        type: DataTypes.STRING
    },
    course: {
        type: DataTypes.INTEGER
    },
    sex: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: 'user'
    },
    lead: {
        type: DataTypes.STRING
    },
    refreshToken: {
        type: DataTypes.TEXT
    },
    requirements: {
        type: DataTypes.STRING
    }
}, {sequelize})

export default User