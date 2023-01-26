import {DataTypes, Model} from "sequelize"
import sequelize from "../db/config.js"

class TaskModel extends Model {}

TaskModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    longitude: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    latitude: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    userId1: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    userId2: {
        type: DataTypes.INTEGER
    }
}, {sequelize});

export default TaskModel