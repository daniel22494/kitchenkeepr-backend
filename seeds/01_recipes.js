/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function (knex) {
  await knex("recipes").del();
  await knex("recipes").insert([
    {
      id: 1,
      title: "Caramelized Onion Dip",
      author: "@ConciousChris",
      link: "https://www.instagram.com/reel/Ci8gWXbM1MQ/",
    },
    {
      id: 2,
      title: "Tofoo 'Salmon' Tacos",
      author: "@NoMeatDisco",
      link: "https://www.instagram.com/reel/Ci7xwG4K1oT/",
    },
    {
      id: 3,
      title: "Creamy Roasted Tomato Soup",
      author: "@TheModernNonna",
      link: "https://www.instagram.com/reel/ChNFtrfgeeo/",
    },
    {
      id: 4,
      title: "Chickpea Salad Bowl",
      author: "@ByNatureFood",
      link: "https://www.instagram.com/reel/ChpjsaCKo9v/",
    },
    {
      id: 5,
      title: "Pomme Fouree",
      author: "@OutstandingVegan",
      link: "https://www.instagram.com/reel/ChAYEU7qvV0/",
    },
  ]);
};
