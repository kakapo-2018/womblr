
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        {id: 1, location: 'rowValue1'},
        {id: 2, location: 'rowValue2'},
        {id: 3, location: 'rowValue3'}
      ]);
    });
};
