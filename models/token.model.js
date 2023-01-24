import {DataTypes, Model} from "sequelize"
import sequelize from "../db/config.js"
import User from "./user.model.js"

class Token extends Model {
}

Token.init({
    refreshToken: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, { sequelize })

Token.User = Token.belongsTo(User)

export default Token