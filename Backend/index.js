//const { default: userEvent } = require('@testing-library/user-event');
import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
host: process.env.MYSQL_HOST,
user: process.env.MYSQL_USER,
password: process.env.MYSQL_PASSWORD,
database: process.env.MYSQL_DATABASE

}).promise();

async function getTests() {
//pool.query("INSERT INTO Test (idTest, adress) VALUES (2,'test!');")
const [rows] = await pool.query("SELECT * FROM Properties.Test")
        return rows
}

async function getTest(id){
    const [rows] = await pool.query(`
    SELECT * 
    FROM Properties.Test
    WHERE idTest = ?`, [id])
        return rows[0]
}

async function createTest(idTest, adress){
        const [result] = await pool.query(`
        INSERT INTO Test (idTest, adress)
        VALUES (?,?)
        `, [idTest,adress] )
        
}

const result = await createTest(4,'Test')
console.log(result)