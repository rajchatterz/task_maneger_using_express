
const Task = require('../model/task')
const getAllTask = (req,res)=>{
    res.send("all items from the the file")
    
}

const createTask = async(req,res)=>{
    const task = await Task.create(req.body)
    res.status(200).json({
        task
    })
}
const getTask = (req,res)=>{
    res.json({
        id:req.params.id
    })
}
const updateTask = (req,res)=>{
    res.send("update Task")
}
const deletetask = (req,res)=>{
    res.send("delete Task")
}
module.exports={
    getAllTask,
    createTask,
    getTask,
    updateTask,
    deletetask

}