
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredient_name: 'eggs' },
        { ingredient_name: 'sugar' },
        { ingredient_name: 'milk' },
        { ingredient_name: 'butter' },
        { ingredient_name: 'fresh peaches' },
        { ingredient_name: 'flour' },
        { ingredient_name: 'cinnamon' },
       
      ]);
    });
};
