const Task=require('../models/Task')

const getAllTask = (req, res) => {
    res.send("get all tasks");
};
const getTask = (req, res) => {
    res.json({id:req.params.id});
}

async function createTask(req, res) {
    try {
        console.log('Request body:', req.body);
        
        // Wait for the task to be created
        const task = await Task.create(req.body);
        
        // Send the response
        res.status(201).json(task);
    } catch (error) {
        console.error('Error creating task:', error);
        res.status(500).json({ error: 'Failed to create task' });
    }
}

const updateTask = (req, res) => {
    res.json({id:req.params.id});
}
const deleteTask = (req, res) => {
    res.send(`deleted task at id: ${req.params.id}`);
}

module.exports = { getAllTask,getTask, createTask, updateTask, deleteTask };