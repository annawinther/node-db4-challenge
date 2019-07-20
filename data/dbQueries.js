const knex = require('knex');
const db = knex(require('../knexfile').development);

function getRecipes(){
    return db('recipes');
}
function getRecipesById(id){
    return db('recipes').where({ id });
}
function getShoppingList(id){
    // should return a list of ingredients and quantities
    // for a given recipe
    // select 
    //     quantity,
    //     ingredient_name
    // from ingredients
    // join ingredients_quantity as q on ingredients.id = q.id
    return db('ingredients')
        .select('quanity', 'ingredient_name')
        .innerJoin('ingredient_quantity', 'ingredients.id', 'ingredient_quantity.ingredients_id')
        .where({ recipe_id: id })
}

function getInstructions(id){
    // should return a list of step by step instructions for preparing a recipe
    // select 
    //     instructions,
    //     step_number
    // from recipes
    // join steps on recipes.id = steps.id
    // order by step_number

    // select 
    //     instructions,
    //     step_number,
    // from steps
    // left join recipes on steps.id = steps.recipe_id
    // order by step_number
    return db('steps')
        .select('instructions', 'step_number')
        .leftJoin('recipe', 'steps.id', 'steps.recipe_id')
        .where({ recipe_id: id })
        .orderBy('step_number')
}


module.exports = {
    getRecipes,
    getRecipesById,
    getShoppingList,
    getInstructions
}