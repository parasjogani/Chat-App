import Code from "../models/code.schema.js"
import asyncHandler from '../services/asyncHandler.js'
import customError from '../services/customError.js'
import { nanoid } from "nanoid"

export const generateCode = asyncHandler(async (req, res) => {
    const code = nanoid(6).toString()

    const chat = await Code.create({
        code
    })
    
    if (!chat) {
        throw new customError("Code not generated", 400)
    }
    res.status(200).json(chat)
})
