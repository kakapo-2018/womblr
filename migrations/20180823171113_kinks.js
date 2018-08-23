
exports.up = function(knex, Promise) {
  return knex.schema.createTable('kinks', (table) => {
    table.increments('id');
    table.string('kink');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('kinks');
};
