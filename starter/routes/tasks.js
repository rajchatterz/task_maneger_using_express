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


// get mean to get the single item
// post mean to post something
// put/patch mean to update
// delete mean to delete

router.route('/').get(getAllTask).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deletetask)
module.exports=router