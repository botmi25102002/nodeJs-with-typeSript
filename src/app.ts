// const express = require("express");
import express from "express";
import 'dotenv/config';  //require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 8080;
// const path = require("path");

//config view engine 
app.set('view engine','ejs');
app.set('views', __dirname + "/views");// __dirname là đường link tuyệt đối của file thực thi __dirname

app.get("/", (req, res)=>{
    res.render("home.ejs");
})
app.get("/", (req, res) => {
    res.send("Hello world 123")
})
app.get("/nemo", (req, res) => {
    res.send("Hello Xuan Truong")
})

app.listen(8080, () => {
    console.log(`My app is running on port:  ${PORT}`);
    console.log('check PORT', process.env.PORT)
})