const express = require('express')
const router = express.Router()
// import the controller
const {
    getAllTask,
    createTask,
    getTask,
    updateTask,
    deletetask
} = require('../controllers/tasks')


router.route('/').get(getAllTask).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deletetask)
module.exports=router