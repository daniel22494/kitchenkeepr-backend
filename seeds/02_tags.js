/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("tags").del();
  await knex("tags").insert([
    { id: 1, tag: "Dinner" },
    { id: 2, tag: "Snack" },
    { id: 3, tag: "Dessert" },
  ]);
};
