const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'please enter the name'],
        trim:true,
        maxlength:[20,'name must be under 20 character']
    },
    completed:{
        type:Boolean,
        default:false
    }
})

module.exports=mongoose.model('Task',taskSchema)