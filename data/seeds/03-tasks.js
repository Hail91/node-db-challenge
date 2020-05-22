
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, project_id: '1', task_description: 'Find a good tree', completed: false},
        {id: 2, project_id: '1', task_description: 'Climb said tree', completed: false},
        {id: 3, project_id: '1', task_description: 'Begin building treehouse', completed: false},
        {id: 4, project_id: '2', task_description: 'Gather tools', completed: false},
        {id: 5, project_id: '2', task_description: 'Find a good place to work', completed: false},
        {id: 6, project_id: '2', task_description: 'Restore to former beauty', completed: false},
        {id: 7, project_id: '3', task_description: 'Get some nice oakwood', completed: false},
        {id: 8, project_id: '3', task_description: 'Sand it down, make it look nice', completed: false},
        {id: 9, project_id: '3', task_description: 'Assemble!', completed: false}
      ]);
    });
};
