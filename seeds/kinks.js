
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('kinks').del()
    .then(function () {
      // Inserts seed entries
      return knex('kinks').insert([
        {id: 1, kink: 'balloons'},
        {id: 2, kink: 'paws'},
        {id: 3, kink: 'humans'},
        {id: 4, kink: 'voyeurism'},
        {id: 5, kink: 'bdsm'},
        {id: 6, kink: 'cuddles'},
        {id: 7, kink: 'ebcrj'},
        {id: 8, kink: 'exhibitionism'}
      ]);
    });
};
