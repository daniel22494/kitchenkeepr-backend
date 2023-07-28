/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("favourites").del();
  await knex("favourites").insert([
    { id: 1, recipe_id: 10 },
    { id: 2, recipe_id: 12 },
    { id: 3, recipe_id: 13 },
    { id: 4, recipe_id: 14 },
  ]);
};
