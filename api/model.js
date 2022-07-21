const db = require('../data/db-config');

const getRecipeById = async id => {
    
    const data = await db('steps as s')
            .leftJoin('recipes as r', 's.recipe_id', 'r.recipe_id')
            .leftJoin('step_ingredients as si', 's.step_id', 'si.step_id')
            .leftJoin('ingredients as i', 'si.ingredient_id', 'i.ingredient_id')
            .select('r.recipe_id', 'r.recipe_name', 'created_at', 's.step_id', 's.step_number', 's.instructions', 'si.ingredient_id', 'ingredient_name', 'quantity')
            .where('s.recipe_id', id)
            .orderBy('s.step_number')

    const steps = [];

    data.forEach(item => {
        if(steps[item.step_number - 1] == null){
            steps[item.step_number - 1] = {
                step_id: item.step_id,
                step_number: item.step_number,
                instructions: item.instructions,
                ingredients: []
            }
        }
        if(item.ingredient_id !== null){
            let step = steps[item.step_number - 1]
            step.ingredients = [...step.ingredients, {
                ingredient_id: item.ingredient_id,
                ingredient_name: item.ingredient_name,
                quantity: item.quantity
            }]
            steps[item.step_number - 1] = step
        }
    })
    
    
    const result = {
        recipe_id: data[0].recipe_id,
        recipe_name: data[0].recipe_name,
        created_at: data[0].created_at,
        steps: steps
    }
    return result;
}

module.exports = {
    getRecipeById
}


// for(let i = 0; i < data.length; i++){
//     let ingredients = []
//     for(let j = 0; j < data.length; j++){
//         if(data[i].step_id === data[j].step_id && data[j].ingredient_id !== null){
//             ingredients.push({
//                 ingredient_id: data[j].ingredient_id,
//                 ingredient_name: data[j].ingredient_name,
//                 quantity: data[j].quantity
//             })
//         }
//     }
    
//     steps.push({
//         step_id: data[i].step_id,
//         step_number: data[i].step_number,
//         instructions: data[i].instructions,
//         ingredients: ingredients
//     })
// }
