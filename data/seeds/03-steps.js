
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        { recipe_id: 1, step_number: 1, instructions: 'melt the butter' },
        { recipe_id: 1, step_number: 2, instructions: 'add eggs and sugar' },
        { recipe_id: 2, step_number: 1, instructions: 'cut the peaches up and add the butter' },
        { recipe_id: 1, step_number: 3, instructions: 'add the flour' },
        { recipe_id: 2, step_number: 2, instructions: 'add the flour and sugar' },
        { recipe_id: 1, step_number: 4, instructions: 'add the milk and whisk unitl batter is thin' },
        { recipe_id: 2, step_number: 3, instructions: 'add the sugar and stir good' },
        { recipe_id: 2, step_number: 5, instructions: 'add the eggs' },
        { recipe_id: 1, step_number: 5, instructions: 'put the waffle ion on and when warm fill on escoop with batter and fry until golden' },
        { recipe_id: 1, step_number: 6, instructions: 'enjoy!' },
        { recipe_id: 2, step_number: 6, instructions: 'stir the batter and add it in a cake form' },
        { recipe_id: 2, step_number: 7, instructions: 'put the oven on and when warm, set cake in and bake for 40 minutes' },
        { recipe_id: 2, step_number: 8, instructions: 'serve with some cut up peach and some cream' },
        { recipe_id: 3, step_number: 1, instructions: 'put the milk, melted butter and cinnamon in a bowl and whisk good' },
        { recipe_id: 3, step_number: 2, instructions: 'add the eggs and sugar and flour' },
        { recipe_id: 3, step_number: 3, instructions: 'use hands to make it smooth' },
        { recipe_id: 3, step_number: 4, instructions: 'have it in a long form and bake it for 30 minutes and serve!' },
      ]);
    });
};
