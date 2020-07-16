import express from 'express'
import userHandlerController from '../controller/userHandlerController'
const route = express.Router()

route.get('/', (_, response) => { response.json({ message: 'Hello wold' }) })
route.post('/user-setup', userHandlerController.resgister)
export default route
