import express from 'express'

const route = express.Router()

route.get('/', (_, response) => { response.json({ message: 'Hello wold' }) })

export default route
