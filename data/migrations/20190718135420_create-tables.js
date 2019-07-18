
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', table => {
        table.increment();
        table.text('recipe_name')
            .unique()
            .notNullable();
    })
    .createTable('ingredients', table => {
        table.increment();
        table.text('ingredient_name')
            .unique()
            .notNullable();
    })
    .createTable('steps', table => {
        table.increment();
        table.
    })
};

exports.down = function(knex) {
  
};
