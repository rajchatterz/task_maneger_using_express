const express = require('express')
const app = express()

const port = 5001
// routes
app.use('/',(req,res)=>{
    res.send("hey")
})

app.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
})