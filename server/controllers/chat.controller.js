import asyncHandler from "../services/asyncHandler.js"
import CustomError from "../services/customError.js"
import Code from "../models/code.schema.js"
import Chat from "../models/chat.schema.js"

export const joinchat = asyncHandler(async (req, res) => {
    const { code } = req.body

    //Check if code exist
    const existingcode = await Code.findOne({ code })
    if (!existingcode) {
        throw new CustomError("Invalid code", 400)
    }

    //Create new chat 
    const chat = await Chat.create({
        chatCode: code,
        messages: []
    })

    res.status(200).json(chat)
})