const express = require('express');

const project = require('./projects-model');

const router = express.Router();

// GET - Get a list of projects from the database.

router.get('/', (req, res) => {
    project.getProjects()
    .then(projects => {
        projects.map(proj => {
            if (proj.completed) { // Mapping through projects data and converting 0/1 INT to true/false
                proj.completed = true
            }
            else {
                proj.completed = false
            }
        })
        return res.json(projects)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({
            message: 'Failed to retrieve the projects'
        });
    });
});

// POST - Add a project to the project database

router.post('/', (req, res) => {
    const projectData = req.body
    project.addProject(projectData)
    .then(project => {
        res.status(201).json(project)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({
            message: 'Failed to create the project'
        });
    });
});

module.exports = router;