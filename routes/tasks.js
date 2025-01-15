const express = require('express');
const router = express.Router();
const { getAllTask, createTask, getTask, deleteTask, updateTask } = require('../controllers/tasks_controller');

// console.log(controller);

router.route('/').get(getAllTask).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;