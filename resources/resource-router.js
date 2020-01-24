const express = require('express');

const resource = require('./resource-model');

const router = express.Router();

// GET - Get a list of resources from the database.

router.get('/', (req, res) => {
    resource.getResources()
    .then(resource => {
        res.json(resource)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({
            message: 'Failed to retrieve the resources'
        });
    });
});

// POST - Add a resource to the project database

router.post('/', (req, res) => {
    const resourceData = req.body
    resource.addResource(resourceData)
    .then(resource => {
        res.status(201).json(resource)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({
            message: 'Failed to create the resource'
        });
    });
});

module.exports = router;