
const Task = require('../model/task')
const getAllTask = async(req,res)=>{
    try {
       const tasks = await Task.find({})
       res.status(200).json({tasks})
    } catch (error) {
        res.status(400).json({msg:error})
    }
    
}

const createTask = async(req,res)=>{
    try {
        const task = await Task.create(req.body)
    res.status(200).json({
        task
    })
    } catch (error) {
        res.status(500).json({success:false})
    }
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