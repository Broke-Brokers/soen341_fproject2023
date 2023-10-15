const { default: userEvent } = require('@testing-library/user-event');
const express = require("express");
const  app = express();
const mysql = require("mysql");

const db = mysql.createPool({
host: "localhost",
user: "root",
Password: "ElusmeG1",
database: 'Properties'

});

app.get("/",(req,res) => {
   

    const sqlInsert = "INSERT INTO Test (idTest, adress) VALUES (2,'test!');"
    db.query(sqlInsert,(err,result) => {
        res.send("fmarymr");
    } )
});


app.listen(3001,() =>{

    console.log("running on port 3001");
});