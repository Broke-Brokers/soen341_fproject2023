import express from "express"
import mysql from "mysql"

const app = express()

const db =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"broke",
    database:"broke"
})


app.use(express.json());  // allows to use any json file using a client


app.get("/", (req, res) => {
    res.json("hello");
  });



app.get("/houses", (req, res) => {
    const q = "SELECT * FROM houses";
    db.query(q, (err, data) => {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      return res.json(data);
    });
  });


  app.post("/houses", (req, res) => {
    const q = "INSERT INTO houses(`title`, `desc`, `price`, `cover`) VALUES (?)";
  
    // in postman 

    const values = [
      req.body.title,
      req.body.desc,
      req.body.price,
      req.body.cover,
    ];

    // const values = [
    //   "ttttttitle",
    //   "dddddesc",
    //   1234,
    //   "cccccover",
    // ];
  
    db.query(q, [values], (err, data) => {
      if (err) return res.send(err);
      return res.json("House has been created successfully");
    });
  });




app.listen(8800,() =>{
    console.log("connected to back end")
})