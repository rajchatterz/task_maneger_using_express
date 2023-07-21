const mongoose = require('mongoose')

const MONGO = process.env.MONGO
const connectionToString = async()=>{
    try {
        await mongoose.connect(MONGO)
        .then((con)=>{
            console.log(`db successfully connected at ${con.connection.host}`)
        })
        .catch((err)=>{
            console.log(`error found while frtching ${err}`)
        })
    } catch (error) {
        console.error(`error found while fetching the data from database ${error}`);
    }
}

module.exports=connectionToString