import express from "express";
import mysql from "mysql";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) console.error("Database connection failed: ", err);
    else console.log("Connected to MySQL");
});

app.get("/verify/:serial_no", (req, res) => {
    const { serial_no } = req.params;
    db.query("SELECT * FROM certificates WHERE serial_no = ?", [serial_no], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.length === 0) return res.status(404).json({ message: "Certificate not found" });
        res.json(result[0]);
    });
});