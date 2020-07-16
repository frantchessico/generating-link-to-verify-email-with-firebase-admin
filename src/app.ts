import express from 'express'
import cors from 'cors'
import route from './route'

const app = express()
app.use(cors())
app.use(express.json())

app.use(route)


export default app
