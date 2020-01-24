
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, project_name: 'Build Treehouse', project_description: 'Gather supplies and build it', completed: false},
        {id: 2, project_name: 'Restore corvette', project_description: 'Restore old car with new parts', completed: false },
        {id: 3, project_name: 'Build bookshelf', project_description: 'Handmake a bookshelf for myself', completed: false}
      ]);
    });
};
