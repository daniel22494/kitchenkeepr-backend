/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable("recipes", (table) => {
    table.increments("id").primary();
    // table
    //     .integer('user_id')
    //     .unsigned()
    //     .references('user_id')
    //     .onUpdate('CASCADE')
    //     .onDelete('CASCADE');
    table.string("title").notNullable();
    table.string("author").notNullable();
    table.string("link").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("recipes");
};
