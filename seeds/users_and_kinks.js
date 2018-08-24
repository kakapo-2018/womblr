
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users_and_kinks').del()
    .then(function () {
      // Inserts seed entries
      return knex('users_and_kinks').insert([
        {id: 1, user_id: 'rowValue1', kink_id: 'rowValue1'},
        {id: 2, user_id: 'rowValue2', kink_id: 'rowValue1'},
        {id: 3, user_id: 'rowValue3', kink_id: 'rowValue1'}
      ]);
    });
};
