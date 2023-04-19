import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import authRouter from './routes/authRoutes.js'

const app = express()

// Middleware
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

// Morgan Logger
app.use(morgan("tiny"))

// Routes
app.use('/api/auth', authRouter)


export default app

