// const express = require("express");
import express from "express";
import 'dotenv/config';  //require('dotenv').config();
import webRoutes from "./routes/web";



const app = express();
const PORT = process.env.PORT || 8080;
// const path = require("path");

//config view engine 
app.set('view engine','ejs');
app.set('views', __dirname + "/views");// __dirname là đường link tuyệt đối của file thực thi __dirname


//config static file
app.use(express.static('public'));

//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//config route
webRoutes(app); //const app = express(); app is a instance

app.listen(PORT, () => {
    console.log(`My app is running on port:  ${PORT}`);
    console.log('check PORT', process.env.PORT)
})