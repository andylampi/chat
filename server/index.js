import express from "express";
import { Server } from "socket.io";

const app = express();
const server = app.listen(5000); // Creazione di un server HTTP con Express

const io = new Server(server); // Inizializzazione di Socket.IO con il server Express

const chats_open = {}

io.on("connection", (socket) => {
  console.log("A user connected", socket);

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });

  socket.on("message", (message)  => {
  })

});