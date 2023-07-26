import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import routes from './routes/router.js'
const port: number = 3000;

const app: Express = express();

app.use(cors());
app.use(morgan("dev"))
app.use(express.json())

app.use('/', routes)

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`)
})