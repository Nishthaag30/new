const path = require("path");
const fs = require("fs");
const express = require("express");
const engine = require("ejs-mate")
const mongoose = require("mongoose")

const app = express()
const PORT = 3000;

mongoose.connect("mongodb://localhost:27017/db")
.then(()=> console.log("DB CONNECTED"))
.catch((err)=> console.log(err));

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname +"/index.html"))
})
app.listen(PORT, ()=>{
    console.log("Server is running");
})