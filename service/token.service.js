import jwt from 'jsonwebtoken'
import userModel from "../models/user.model.js"

class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '10m'})
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '30d'})
        return {
            accessToken,
            refreshToken
        }
    }

    validateAccessToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET)
            return userData
        } catch (e) {
            return null
        }
    }

    validateRefreshToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET)
            return userData
        } catch (e) {
            return null
        }
    }

    async saveToken(userId, refreshToken) {
        const user = await userModel.findOne({where: { id: userId }})
        user.refreshToken = refreshToken
        return user.save()
    }

    async removeToken(refreshToken) {
        const user = await userModel.findOne({where: { refreshToken }})
        user.refreshToken = null
        return user
    }

    async findToken(refreshToken) {
        const user = await userModel.findOne({where: {refreshToken}})
        return user
    }
}

export default new TokenService()