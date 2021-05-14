import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.send("Node with Typescript");
})

app.listen(port, () => console.log(`Server is Running on Port ${port}`))