import express from 'express'
import userHandlerController from '../controller/userHandlerController'
const routePosts = express.Router()



routePosts.post('/register', userHandlerController.resgister);
routePosts.post('/login', userHandlerController.loginEmailPassword);
routePosts.post('/set-phone/:uid', userHandlerController.updatePhoneNumber)
routePosts.post('/reset-password', userHandlerController.resetPassword);
routePosts.post('/reset-password', userHandlerController.resetPassword);

export default routePosts



