import express from 'express'
import { generateCode } from '../controllers/code.controller.js'

const router = express.Router()

router.post("/generate-code", generateCode)

export default router