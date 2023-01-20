import jwt from 'jsonwebtoken'
import tokenModel from "../models/token.model.js"

class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '15s'})
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '30s'})
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
        const tokenData = await tokenModel.findOne({where: { UserId: userId }})
        if (tokenData) {
            tokenData.refreshToken = refreshToken
            return tokenData.save()
        }
        const token = await tokenModel.create({UserId: userId, refreshToken})
        return token
    }

    async removeToken(refreshToken) {
        const tokenData = await tokenModel.destroy({where: { refreshToken }})
        return tokenData
    }

    async findToken(refreshToken) {
        const tokenData = await tokenModel.findOne({where: {refreshToken}})
        return tokenData
    }
}

export default new TokenService()