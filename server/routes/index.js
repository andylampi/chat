import { Router } from "express";

let router = Router();

let users_db = ["michele riva", "michele","giacomo riva","lino","ciao a tutti"]


router.post("/get_users", (req,res) => {
    let body = req.body
    let users = users_db.filter(el => el == body.user) 
    res.send(JSON.stringify({"users":users}))
})

export default router