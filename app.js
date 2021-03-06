const express = require('express')
const app = express()

const connectDB = require('./db/connect')
const tasks = require('./routes/tasks')
require('dotenv').config()

app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1/tasks',tasks)

const port = 3000

const start = async()=>{
    try { 
        await connectDB(process.env.MONGO_URI)
        app.listen(port,()=>{
            console.log('server is listening in port 3000....')
        }) 
    } catch (error) {
        console.log(error)
    }
}

start()