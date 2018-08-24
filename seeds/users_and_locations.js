
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users_and_locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('users_and_locations').insert([
        {id: 1, user_id: 'rowValue1', location_id:''},
        {id: 2, user_id: 'rowValue2', location_id:''},
        {id: 3, user_id: 'rowValue3', location_id:''}
      ]);
    });
};
