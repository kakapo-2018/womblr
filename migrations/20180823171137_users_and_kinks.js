
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_and_kinks', (table) => {
    table.increments('id');
    table.integer('user_id');
    table.integer('kink_id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users_and_kinks');
};
