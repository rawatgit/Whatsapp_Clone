// imports
import Express from "express";
import mongoose from "mongoose";

// app config
const app = Express()
const port  = process.env.PORT || 9000

//middleware


//Db config


//api routes
app.get("/", (req, res) => res.status(200).send("Comon Web Application"))


//Listen
app.listen(port, () => console.log('Listening on localhost: 9000'))