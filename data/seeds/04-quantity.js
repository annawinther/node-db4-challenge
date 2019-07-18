
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients_quantity').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients_quantity').insert([
        { recipe_id: 1, ingredient_id: 2, quantity: 5},
        { recipe_id: 1, ingredient_id: 1, quantity: 3},
        { recipe_id: 3, ingredient_id: 1, quantity: 6},
        { recipe_id: 2, ingredient_id: 3, quantity: 2},
        { recipe_id: 1, ingredient_id: 4, quantity: 2},
        { recipe_id: 1, ingredient_id: 5, quantity: 7},
        { recipe_id: 1, ingredient_id: 6, quantity: 5},
        { recipe_id: 1, ingredient_id: 7, quantity: 1},
      ]);
    });
};
