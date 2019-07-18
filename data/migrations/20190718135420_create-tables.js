
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', table => {
        table.increments();
        table.text('recipe_name')
            .unique()
            .notNullable();
    })
    .createTable('ingredients', table => {
        table.increments();
        table.text('ingredient_name')
            .unique()
            .notNullable();
    })
    .createTable('steps', table => {
        table.increments();
        table.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.integer('step_number')
            .unsigned()
            .notNullable();
        table.text('instructions')
            .notNullable()
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
};
