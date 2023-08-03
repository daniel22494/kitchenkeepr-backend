/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("taggedRecipes").del();
  await knex("taggedRecipes").insert([
    { recipe_id: 1, tag_id: 1 },
    { recipe_id: 2, tag_id: 1 },
    { recipe_id: 3, tag_id: 1 },
    { recipe_id: 4, tag_id: 1 },
    { recipe_id: 5, tag_id: 1 },
    { recipe_id: 6, tag_id: 1 },
    { recipe_id: 7, tag_id: 1 },
    { recipe_id: 8, tag_id: 1 },
    { recipe_id: 9, tag_id: 1 },
    { recipe_id: 10, tag_id: 1 },
    { recipe_id: 11, tag_id: 3 },
    { recipe_id: 12, tag_id: 3 },
    { recipe_id: 13, tag_id: 3 },
    { recipe_id: 14, tag_id: 3 },
    { recipe_id: 15, tag_id: 3 },
    { recipe_id: 16, tag_id: 3 },
    { recipe_id: 17, tag_id: 3 },
    { recipe_id: 18, tag_id: 3 },
    { recipe_id: 19, tag_id: 3 },
    { recipe_id: 20, tag_id: 3 },
    { recipe_id: 21, tag_id: 2 },
    { recipe_id: 22, tag_id: 2 },
    { recipe_id: 23, tag_id: 2 },
    { recipe_id: 24, tag_id: 2 },
    { recipe_id: 25, tag_id: 2 },
    { recipe_id: 26, tag_id: 2 },
    { recipe_id: 27, tag_id: 2 },
    { recipe_id: 28, tag_id: 2 },
    { recipe_id: 29, tag_id: 2 },
    { recipe_id: 30, tag_id: 2 },
  ]);
};
