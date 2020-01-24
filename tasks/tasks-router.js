const express = require('express');

const task = require('./tasks-model');

const router = express.Router();

// GET - Get a list of tasks from the database.

router.get('/', (req, res) => {
    task.getTasks()
    .then(task => {
        task.map(tasks => {  // Mapping through the tasks data and converting INT 0/1 values to true/false
            if (tasks.completed) {
                tasks.completed = true
            }
            else { 
                tasks.completed = false
            }
        })
            return res.status(200).json(task)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({
            message: 'Failed to retrieve the tasks'
        });
    });
});

// POST - Add a task to the project database

router.post('/', (req, res) => {
    const taskData = req.body
    task.addTask(taskData)
    .then(task => {
        res.status(201).json(task)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({
            message: 'Failed to create the task'
        });
    });
});

module.exports = router;