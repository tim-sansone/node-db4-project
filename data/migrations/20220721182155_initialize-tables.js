

exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments('recipe_id');
        tbl.varchar('recipe_name').unique().notNullable();
        tbl.datetime('created_at');
    })
    .createTable('steps', tbl => {
        tbl.increments('step_id');
        tbl.integer('step_number').notNullable();
        tbl.varchar('instructions').notNullable();
        tbl.integer('recipe_id')
            .references('recipe_id')
            .inTable('recipes')
            .unsigned()
            .notNullable();
    })
    .createTable('ingredients', tbl => {
        tbl.increments('ingredient_id');
        tbl.varchar('ingredient_name').notNullable();
    })
    .createTable('step_ingredients', tbl => {
        tbl.integer('step_id')
            .references('step_id')
            .inTable('steps')
            .unsigned()
            .notNullable()
        tbl.integer('ingredient_id')
            .references('ingredient_id')
            .inTable('ingredients')
            .unsigned()
            .notNullable()
        tbl.primary(['step_id', 'ingredient_id'])
        tbl.varchar('quantity').notNullable();
    })
};


exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('step_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes');
};
