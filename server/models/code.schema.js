import mongoose from "mongoose"

const codeSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        unique: true,
        maxlength: 6,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

export default mongoose.model("Code", codeSchema)