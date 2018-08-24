
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users_and_kinks').del()
    .then(function () {
      // Inserts seed entries
      return knex('users_and_kinks').insert([
        {id: 1, user_id: 1, kink_id: 1},
        {id: 2, user_id: 2, kink_id: 2},
        {id: 3, user_id: 3, kink_id: 3},
        {id: 4, user_id: 4, kink_id: 4},
        {id: 5, user_id: 5, kink_id: 5},
        {id: 6, user_id: 6, kink_id: 6},
        {id: 7, user_id: 7, kink_id: 7},
        {id: 8, user_id: 8, kink_id: 8},
        {id: 9, user_id: 9, kink_id: 1},
        {id: 10, user_id: 10, kink_id: 2},
        {id: 11, user_id: 11, kink_id: 3},
        {id: 12, user_id: 12, kink_id: 4},
        {id: 13, user_id: 13, kink_id: 5},
        {id: 14, user_id: 14, kink_id: 6},
        {id: 15, user_id: 15, kink_id: 7},
        {id: 16, user_id: 16, kink_id: 8},
        {id: 17, user_id: 17, kink_id: 1},
        {id: 18, user_id: 18, kink_id: 2},
        {id: 19, user_id: 19, kink_id: 3},
        {id: 20, user_id: 20, kink_id: 4},
       

      ]);
    });
};
