
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { recipe_name: 'Waffles'},
        { recipe_name: 'Peach Cake'},
        { recipe_name: 'Cinnamon Monkey Bread'},
      ]);
    });
};
