import express from "express";
import cors from "cors"
import { Server } from "socket.io";
import router from "./routes/index.js";
import connectDb from "./db/connectDb.js";

const app = express();
app.use(cors({
  origin: "http://localhost:3000"
}))
connectDb()

// Utilizza express.json() per analizzare il corpo delle richieste come JSON
app.use(express.json());

app.use(router)

const server = app.listen(5000); // Creazione di un server HTTP con Express

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // Sostituisci con l'URL del tuo client React
    methods: ["GET", "POST"],
  }
},); // Inizializzazione di Socket.IO con il server Express

// Oggetto che conterrà tutte le connessioni socket aperte
const chats_open = {}

io.on("connection", (socket) => {
  // Variabile che conterrà l'id dell'utente
  let user;
  let image;
  let name;
  console.log(socket.handshake.query.id_user)
  if (socket.handshake.query.id_user) {
    chats_open[socket.handshake.query.id_user] = socket.id
    // Assegna ad user l'id dell'utente connesso
    user = socket.handshake.query.id_user
    image = socket.handshake.query.image
    name = socket.handshake.query.name
  }
  else {
    socket.emit("error", "id user non specificato")
    socket.disconnect();
  }

  socket.on("disconnect", () => {
    console.log("A user disconnected");
    delete chats_open[user]
  });

  socket.on("message", (message) => {
    socket.to(chats_open[message.id_user]).emit("new_message", JSON.stringify({ "message": message.message, user: user, "image": image, "name":name }))
  })
});