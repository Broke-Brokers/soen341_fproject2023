import express from "express"
import mysql from "mysql"
const app = express()
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"=1234Lovenature",
    database:"test"
})

app.get("/", (req,res)=>{
    res.json("Hello backend")
})

app.get("/buyer", (req, res)=>{
    const q= "SELECT * FROM buyer"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
    
})


app.listen(8800, ()=>{
    console.log("fonctionne!")
})