// Imports
import express from "express"
import mongoose from "mongoose"
import Cors from 'cors'
import Messages from './dbMessage.js'
import Pusher from 'pusher'
import dbMessage from "./dbMessage.js"

// App Config
const app = express()
const port  = process.env.PORT || 9000
const connection_url = 'mongodb+srv://admin:3I89Jbn9PmDBk4jC@cluster0.zrquk.mongodb.net/whatsappDB?retryWrites=true&w=majority'

//****//
//const Pusher = require("pusher");
const pusher = new Pusher({
  appId: "1274523",
  key: "fedaa9fe5ea43a503afa",
  secret: "0cddd0a0e5bacca53ca3",
  cluster: "ap2",
  useTLS: true
});


//Middleware
app.use(express.json())
app.use(Cors())

//Db Config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
   // userCreateIndex: true,
    useUnifiedTopology: true
})
 
//API Routes 
const db = mongoose.connection
db.once("open",()=>{
    console.log("DB Connected")
    const msgCollection = db.collection("whatsappmessages")
    const changeStream = msgCollection.watch()

    changeStream.on('change', change =>{
        console.log(change)
        if (change.operationType === "insert") {
            const messageDetails = change.fullDocument
            pusher.trigger("messages", "inserted", {
                
                message: messageDetails.message,
                name: messageDetails.name,
                timestamp: messageDetails.timestamp,
                received: messageDetails.received
            })
        } else{
            console.log('Error triggering Pusher')
        }
    })
})
app.get("/", (req, res) => res.status(200).send("Comon Web Application"))

app.get('/messages/sync', (req, res) => { 
Messages.find((err, data) => {
    if(err)
        res.status(500).send(err)
    else
        res.status(200).send(data)
})
})

app.post('/messages/new',(req, res) => { 
    const dbMessage = req.body 
    Messages.create(dbMessage,(err, data) => {
        if(err)
            res.status(500).send(err)
        else
            res.status(201).send(data)
    })
})

//Listen
app.listen(port, () => console.log('Listening on localhost: 9000 '))