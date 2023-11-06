import { Router } from "express";
import User from "../db/models/User.js";

let router = Router();



router.post("/get_users", (req,res) => {
    let body = req.body
    User.find({username : body.user}).then((el, err) => {
        if(err){
            res.send("Errore nella query")
        }
        else{
            if(el.length > 0){
                res.send(JSON.stringify({"users":el[0].username}))
            }
            else{
                res.send("Utente non trovato")
            }
        }

    })
})

export default router