require('dotenv').config()
const express = require('express')
const app = express()

const port = 5001
// import the router

const task = require('./routes/tasks')
// routes
app.get('/',(req,res)=>{
    res.send("<h1>hey</h1>")
})
// middleware
app.use(express.json())
// router
app.use('/api/v1/tasks',task)

// init db
const dbconnection = require('./config/dbconfig')

// call the db

const start = async()=>{
    try {
        await dbconnection()
        app.listen(port,()=>{
            console.log(`server is listening on port ${port}`)
        })
        
    } catch (error) {
        console.error('Found error while fetchingthe data');
    }
}
start()
