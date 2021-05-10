const express = require("express");

const app = express();
const port = 8000;

app.get("/", (req, res) => {
    res.send("Node with Typescript");
})

app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`Server Running on Port ${port}`);
})