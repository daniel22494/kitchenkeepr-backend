/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("taggedRecipes", (table) => {
    table.increments("id").primary();
    table
      .integer("recipe_id")
      .unsigned()
      .references("recipes.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .integer("tag_id")
      .unsigned()
      .references("tags.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("taggedRecipes");
};
