import express from 'express'
import userHandlerController from '../controller/userHandlerController'
const route = express.Router()


route.post('/user-setup', userHandlerController.resgister);
route.post('/login', userHandlerController.loginEmailPassword);
route.post('/reset-password', userHandlerController.resetPassword);

export default route

