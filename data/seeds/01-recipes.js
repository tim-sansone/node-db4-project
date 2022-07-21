
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('recipes').truncate()
  await knex('recipes').insert([
    { recipe_id: 1, recipe_name: 'Chicken & Rice', created_at: new Date()},
    { recipe_id: 2, recipe_name: 'Beef & Rice', created_at: new Date()},
    { recipe_id: 3, recipe_name: 'Tofu & Veggies', created_at: new Date()}
  ]);
};
