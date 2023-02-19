import swagger from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'
import {Router} from "express"

const swaggerRouter = new Router()

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "App API",
            version: "0.1.0",
        },
    },
    apis: ["./routers/*.router.js", "./dtos/*.dto.js"],
};

const specs = swagger(options)

swaggerRouter.use(
    swaggerUI.serve,
    swaggerUI.setup(specs)
)

export default swaggerRouter