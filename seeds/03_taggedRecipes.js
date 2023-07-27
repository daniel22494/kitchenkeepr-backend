/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("taggedRecipes").del();
  await knex("taggedRecipes").insert([
    { recipe_id: 1, tag_id: 2 },
    { recipe_id: 2, tag_id: 1 },
    { recipe_id: 2, tag_id: 2 },
    { recipe_id: 3, tag_id: 1 },
    { recipe_id: 4, tag_id: 1 },
    { recipe_id: 5, tag_id: 1 },
    { recipe_id: 9, tag_id: 3 },
  ]);
};
