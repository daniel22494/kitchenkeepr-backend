/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("favourites").del();
  await knex("favourites").insert([
    { id: 1, recipe_id: 3 },
    { id: 2, recipe_id: 6 },
    { id: 3, recipe_id: 7 },
    { id: 4, recipe_id: 8 },
  ]);
};
