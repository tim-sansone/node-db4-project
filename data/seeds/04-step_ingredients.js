
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('step_ingredients').del()
  await knex('step_ingredients').insert([
    { step_id: 1, ingredient_id: 1, quantity: '1.5 cups'},
    { step_id: 1, ingredient_id: 2, quantity: '1 cup'},
    { step_id: 2, ingredient_id: 3, quantity: '2 tbsp'},
    { step_id: 2, ingredient_id: 4, quantity: '1 tbsp'},
    { step_id: 2, ingredient_id: 5, quantity: '2 tbsp'},
    { step_id: 3, ingredient_id: 6, quantity: '2 chicken breasts'},
    { step_id: 5, ingredient_id: 1, quantity: '2.25 cups'},
    { step_id: 5, ingredient_id: 2, quantity: '1.5 cups'},
    { step_id: 6, ingredient_id: 7, quantity: '1 tbsp'},
    { step_id: 6, ingredient_id: 8, quantity: '1/4 cup'},
    { step_id: 6, ingredient_id: 9, quantity: '1/4 cup'},
    { step_id: 7, ingredient_id: 13, quantity: '1 lb'},
    { step_id: 9, ingredient_id: 10, quantity: '1 brick'},
    { step_id: 10, ingredient_id: 3, quantity: '2 tbsp'},
    { step_id: 10, ingredient_id: 11, quantity: '1.5 cups'},
    { step_id: 10, ingredient_id: 12, quantity: '2 tsp'}
  ]);
};
