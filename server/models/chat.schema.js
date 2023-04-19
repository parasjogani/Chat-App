import mongoose from "mongoose"

const chatSchema = new mongoose.Schema({
    chatCode: {
      type: String,
      required: true
    },
    messages: [
      {
        sender: {
          type: String,
          required: true
        },
        message: {
          type: String,
          required: true
        },
        timestamp: {
          type: Date,
          default: Date.now
        }
      }
    ]
  });
  
  export default mongoose.model("Chat", chatSchema);
  
