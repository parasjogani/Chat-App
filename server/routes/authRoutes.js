import express from 'express'
import { joinchat } from '../controllers/chat.controller.js'
import { generateCode } from '../controllers/code.controller.js'

const router = express.Router()

router.post("/generate-code", generateCode)
router.post("/join-chat", joinchat)

export default router