import express from 'express'
import userHandlerController from '../services/userHandler.service'
const routeGet = express.Router()



routeGet.get('/', userHandlerController.getUser);
routeGet.get('/login', userHandlerController.loginEmailPassword);
routeGet.get('/set-phone/:uid', userHandlerController.updatePhoneNumber)
routeGet.get('/reset-password', userHandlerController.resetPassword);
routeGet.get('/reset-password', userHandlerController.resetPassword);

export default routeGet;



