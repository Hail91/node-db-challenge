
exports.up = function(knex) {
    return knex.schema.createTable('projects', table => {
        table.increments()
        table.string('project_name').notNullable()
        table.string('project_description')
        table.boolean('completed').notNullable()
    })
    .createTable('resources', table => {
        table.increments()
        table.string('resource_name').notNullable().unique();
        table.string('resource_description')
    })
    .createTable('tasks', table => {
        table.increments()
        table.integer('project_id')
        .notNullable()
        .references('id')
        .inTable('projects')
        table.string('task_description').notNullable()
        table.string('notes')
        table.boolean('completed').notNullable().defaultTo('false')
    })
    .createTable('project_resources', table => {
        table.integer('project_id')
        .references('id')
        .inTable('projects')
        table.integer('resource_id')
        .references('id')
        .inTable('resources')
    })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('project_resources')
  .dropTableIfExists('tasks')
  .dropTableIfExists('resources')
  .dropTableIfExists('projects')
};
