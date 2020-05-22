
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, resource_name: 'Woodworking supplies'},
        {id: 2, resource_name: 'Glue'},
        {id: 3, resource_name: 'Corvette parts'},
        {id: 4, resource_name: 'Vehicle lift'},
        {id: 5, resource_name: 'Tools'},
        {id: 6, resource_name: 'Patience'}
      ]);
    });
};
