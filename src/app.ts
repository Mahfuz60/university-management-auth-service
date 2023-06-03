import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import usersService from './app/modules/users/users.service'
import userRouter from './app/modules/users/users.route'
const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Application Router
app.use('/api/v1/users/', userRouter)

//testing route
app.get('/', async (req: Request, res: Response) => {
  await usersService.createUser({
    id: '00101',
    password: '12345',
    role: 'student',
  })
  res.send('DataBase Working Successfully!')
})

export default app
