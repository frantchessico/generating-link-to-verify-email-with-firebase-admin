import express from 'express'
import cors from 'cors'
import routePosts from './routes/posts.routes';
import routeGet from './routes/gets.routes';

const app = express()
app.use(cors())
app.use(express.json())

app.use(routePosts, routeGet)

export default app
