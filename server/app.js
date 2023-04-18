import express from 'express'
import cors from 'cors'

const app = express()

// Middleware
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: true}))

// Routes


export default app

