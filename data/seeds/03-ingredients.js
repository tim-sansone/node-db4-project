/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('ingredients').truncate()
  await knex('ingredients').insert([
    { ingredient_id: 1, ingredient_name: 'water'},
    { ingredient_id: 2, ingredient_name: 'rice'},
    { ingredient_id: 3, ingredient_name: 'olive oil'},
    { ingredient_id: 4, ingredient_name: 'chicken seasoning'},
    { ingredient_id: 5, ingredient_name: 'red wine vinegar'},
    { ingredient_id: 6, ingredient_name: 'chicken'},
    { ingredient_id: 7, ingredient_name: 'beef seasoning'},
    { ingredient_id: 8, ingredient_name: 'soy sauce'},
    { ingredient_id: 9, ingredient_name: 'brown sugar'},
    { ingredient_id: 10, ingredient_name: 'tofu'},
    { ingredient_id: 11, ingredient_name: 'veggies'},
    { ingredient_id: 12, ingredient_name: 'veggie seasoning'},
    { ingredient_id: 13, ingredient_name: 'beef'}
    
  ]);
};
