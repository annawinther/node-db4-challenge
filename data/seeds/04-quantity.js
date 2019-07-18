
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients_quantity').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients_quantity').insert([
        { recipe_id: 1, ingredient_id: 2, quantity: Math.random()*10},
        { recipe_id: 1, ingredient_id: 1, quantity: Math.random()*10},
        { recipe_id: 3, ingredient_id: 1, quantity: Math.random()*10},
        { recipe_id: 2, ingredient_id: 3, quantity: Math.random()*10},
        { recipe_id: 1, ingredient_id: 2, quantity: Math.random()*10},
      ]);
    });
};
