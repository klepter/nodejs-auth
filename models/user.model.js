import {DataTypes, Model} from "sequelize"
import sequelize from "../db/config.js"
import Univer from "./univer.model.js"

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
    birthday: {
        type: DataTypes.DATE
    },
    sex: {
        type: DataTypes.CHAR(6),
        allowNull: false
    },
    role: {
        type: DataTypes.CHAR(6),
        allowNull: false,
        defaultValue: 'user'
    }
}, {sequelize})

User.Univer = User.hasOne(Univer)

export default User