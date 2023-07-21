const getAllTask = (req,res)=>{
    res.send("all items from the the file")
    
}

const createTask = (req,res)=>{
    res.json(req.body)
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