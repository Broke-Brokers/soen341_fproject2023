import express from "express"

import {getProperties} from './index.js'

const app = express()

app.get("/", (req,res) =>{
    res.json("hello this is backend")
})

app.get("/Test", async (req,res) => {
    const q = await getProperties()
    res.send(q)
    })



app.listen(8080, () =>{
    console.log("Connected to backend! ")
})
