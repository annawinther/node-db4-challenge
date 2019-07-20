
exports.up = function(knex) {
  return knex.schema
    .createTable('ingredients_quantity', table => {
        table.increments();
        table
            .integer('recipe_id')
            // .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table
            .integer('ingredient_id')
            // .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table
            .integer('quantity')
            .notNullable();
    })
};

exports.down = function(knex) {
  
};
