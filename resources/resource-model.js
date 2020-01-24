const db = require('../data/db-config');

module.exports = {
    getResources,
    addResource
};

// GET - Get list of all resources from the projects database

function getResources() {
    return db.select('*').from('resources')
};

// POST - Add a resource to the projects database

function addResource(resource) {
    return db('resources').insert(resource)
};