const express = require('express')
const router = express.Router()
// import the controller
const {getAllTask} = require('../controllers/tasks')


router.route('/').get(getAllTask)
module.exports=router