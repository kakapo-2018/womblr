
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id');
    table.string('username');
    table.integer('age');
    table.string('profile_pic');
    table.string('bio');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
