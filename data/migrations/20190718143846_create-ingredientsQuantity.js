
exports.up = function(knex) {
  return knex.schema
    .createTable('ingredients_quantity', table => {
        table.increments();
        table
            .integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes');
        table
            .integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients');
        table
            .integer('quanity')
            .notNullable();
    })
};

exports.down = function(knex) {
  
};
