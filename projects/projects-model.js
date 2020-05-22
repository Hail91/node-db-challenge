const db = require('../data/db-config');

module.exports = {
    getProjects,
    addProject
};

// GET - Get list of all projects from the projects database

function getProjects() {
    return db.select('*').from('projects')
};

// POST - Add a project to the projects database

function addProject(project) {
    return db('projects').insert(project)
};