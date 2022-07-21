
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('steps').truncate()
  await knex('steps').insert([
    { step_id: 1, step_number: 1, instructions: "Cook rice in a pot", recipe_id: 1},
    { step_id: 2, step_number: 2, instructions: "Make chicken sauce", recipe_id: 1},
    { step_id: 3, step_number: 3, instructions: 'Bake chicken with sauce at 400 degrees', recipe_id: 1},
    { step_id: 4, step_number: 4, instructions: 'Savor and Enjoy', recipe_id: 1},
    { step_id: 5, step_number: 1, instructions: 'Cook rice in a pot', recipe_id: 2},
    { step_id: 6, step_number: 2, instructions: 'Make beef sauce', recipe_id: 2},
    { step_id: 7, step_number: 3, instructions: 'Pan fry beef with sauce', recipe_id: 2},
    { step_id: 8, step_number: 4, instructions: 'Beef, its whats for dinner', recipe_id: 2},
    { step_id: 9, step_number: 1, instructions: 'Bake tofu at 350 degrees', recipe_id: 3},
    { step_id: 10, step_number: 2, instructions: 'Saute veggies', recipe_id: 3},
    { step_id: 11, step_number: 3, instructions: 'Wish you werent a vegetarian', recipe_id: 3}
  ]);
};
