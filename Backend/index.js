//const { default: userEvent } = require('@testing-library/user-event');
import mysql from 'mysql2'
import dotenv from 'dotenv'
import express from "express"
dotenv.config()

const app = express()

const pool = mysql.createPool({
host: process.env.MYSQL_HOST,
user: process.env.MYSQL_USER,
password: process.env.MYSQL_PASSWORD,
database: process.env.MYSQL_DATABASE

}).promise();
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

// get all the properties
async function getProperties() 
        {

        const [rows] = await pool.query("SELECT * FROM Properties.Property")
        console.log(rows)
             return rows
                 }

// For search after ... 
async function getProperty(id){
    const [rows] = await pool.query(`
    SELECT * 
    FROM Properties.Property
    WHERE idTest = ?`, [id])
        return rows[0]
}

// to create a new property
async function createProperty(Price, Adress, PostalCode, City, Province,
                                 Neighborhood, Baths, Beds, 
                                 Property_type, Listing_type )
 {
             
        const [result] = await pool.query(`
        INSERT INTO Property (price, adress, Postal_Code, City, Province, Neighborhood, No_Bathrooms, No_Bedrooms, 
                Property_type_id, Listing_type_id )
        VALUES (?,?,?,?,?,?,?,?,?,?)
        `, [Price, Adress, PostalCode, City, Province, Neighborhood, Baths, Beds, 
                Property_type, Listing_type ] )
        
}

//async function updateProperty

// to delete a property
async function deleteProperty(id){
        const [result]= await pool.query(`
        DELETE FROM Property 
        WHERE property_id =?`, [id])

}

//const result = await getProperties()
//console.log(result)

//getProperties()
//const result = await createProperty(900, "Reussix", "H3H3H2", "Montreal", "Quebec",null, 4, 5,1,2)
//const result1 = await deleteProperty(64)