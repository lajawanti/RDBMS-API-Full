
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohorts').del()
    .then(function () {
      // Inserts seed entries
      return knex('cohorts').insert([
        {name : 'Data Science'},
        {name : 'Web-development'},
        {name : 'Android'},
      ]);
    });
};