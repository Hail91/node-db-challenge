const db = require('../data/db-config');

module.exports = {
    getTasks,
    addTask,
};

// GET - Get list of all tasks from the projects database

function getTasks() {
    return db('tasks as t')
    .join('projects', 'projects.id', 't.project_id')
    .select('t.id', 't.task_description', 't.notes', 't.completed', 'projects.project_name', 'projects.project_description')
};

// POST - Add a task to the projects database by specifying the project ID

function addTask(task) {
    return db('tasks').insert(task)
    .then(task => {
        return db('tasks')
        .where({ id: task[0]})
        .first();
    })
    .catch(error => {
        console.log(error)
    })
};