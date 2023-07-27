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
    {
      id: 6,
      title: "MUSHROOM SHAWARMA",
      author: "@NoMeatDisco",
      link: "https://www.instagram.com/reel/ChPmkmfKpI0/",
    },
    {
      id: 7,
      title: "Sushi Burger",
      author: "@that.veganbabe",
      link: "https://www.instagram.com/tv/CdLXssvplsL/",
    },
    {
      id: 8,
      title: "DAN DAN NOODLES",
      author: "@chez.jorge",
      link: "https://www.instagram.com/p/CI_bwpWBEYw/",
    },
    {
      id: 9,
      title: "Viral Carrot Cake",
      author: "@that.veganbabe",
      link: "https://www.instagram.com/tv/CezLG0XpHAF/",
    },
    {
      id: 10,
      title: "4-INGREDIENT MANGO SORBET",
      author: "@SoVegan",
      link: "https://www.instagram.com/p/CT2X98vAO-r/",
    },
    {
      id: 11,
      title: "SPICY PEANUT RAMEN",
      author: "@TheEgyptianPlantEater",
      link: "https://www.instagram.com/tv/CbLIYk5qs6D/",
    },
    {
      id: 12,
      title: "Pizza Cinnamon Rolls",
      author: "@TheDirtyRaven",
      link: "https://www.instagram.com/tv/CcA_miqALMx/",
    },
    {
      id: 13,
      title: "Vegan Gyoza",
      author: "@Dr.Vegan",
      link: "https://www.instagram.com/tv/Ca-SJPKqlhY/",
    },
    {
      id: 14,
      title: "Chana Masala",
      author: "@herbifoods",
      link: "https://www.instagram.com/tv/CZe4UIyBlQx/",
    },
    {
      id: 15,
      title: "10 MINUTE CABBAGE UDON NOODLES",
      author: "@SoVegan",
      link: "https://www.instagram.com/tv/CaW49fSg-ql/",
    },
    {
      id: 16,
      title: "VEGAN PAD THAI",
      author: "@FitGreeneMind",
      link: "https://www.instagram.com/tv/CdwJdfLK8Wl/",
    },
    {
      id: 17,
      title: "Healthy Magnum Bars",
      author: "@WholesomeHedonista",
      link: "https://www.instagram.com/tv/CNxYpY2JzXZ/",
    },
    {
      id: 18,
      title: "TOFU KABOBS",
      author: "@FitGreenMind",
      link: "https://www.instagram.com/tv/CM79roqKpI3/",
    },
    {
      id: 19,
      title: "Easy Vegan Panettone Tiramisu",
      author: "@Sepps",
      link: "https://www.instagram.com/tv/CMzzTA8BDkD/",
    },
    {
      id: 20,
      title: "Date Nut Bars",
      author: "@FoodWithFeeling",
      link: "https://www.instagram.com/tv/CMSIB6-hsZg/",
    },
  ]);
};
