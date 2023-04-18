import mongoose from "mongoose"
import app from "./app.js"
import config from "./config/index.js"
import http from "http"
import { Server } from "socket.io"

(async () => {
    try {
        await mongoose.connect(config.MONGODB_URI)
        console.log("DB Connected Successfully");

        // Create HTTP server and Socket.io instance
        const server = http.createServer(app)
        const io = new Server(server)

        // Socket.io connection listener
        io.on('connection', (socket)=>{
            console.log('A user has connected');

            // Socket.io disconnection listener
            socket.on('disconnect', ()=>{
                console.log('A user has disconnected');
            })

            // Socket.io message listener
            socket.on('chat message', (msg)=>{
                console.log(`Message: ${msg}`);
                io.emit('chat message', msg)
            })
        })

        server.listen(config.PORT, () => {
            console.log(`Server listening on port ${config.PORT}`);
        })
    } catch (error) {
        console.log(error);
        throw error
    }
})();