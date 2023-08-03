/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function (knex) {
  await knex("recipes").del();
  await knex("recipes").insert([
    {
      id: 1,
      title: "Roasted Garlic Peanut Eggplant with Sesame Edamame",
      author: "@PlantBasedDR",
      link: "https://www.instagram.com/reel/Cic7enkAUGC/",
    },
    {
      id: 4,
      title: "Sweet Potato Curry with Crispy Chickpeas",
      author: "@ByNatureFood",
      link: "https://www.instagram.com/reel/Ci-pPXLqt6R/",
    },
    {
      id: 3,
      title: "KOREAN FRIED MUSHROOM BURGER",
      author: "@NoMeatDisco",
      link: "https://www.instagram.com/reel/CjNyrK-KpFy/",
    },
    {
      id: 2,
      title: "STICKY GOCHUJANG AUBERGINE",
      author: "@NoMeatDisco",
      link: "https://www.instagram.com/reel/CjxmT0oJkJH/",
    },
    {
      id: 5,
      title: "Teriyaki Tofu & Quinoa",
      author: "@sepps",
      link: "https://www.instagram.com/reel/CkbO-5uLSEu/",
    },
    {
      id: 6,
      title: "Vegan Butternut Squash Mac and Cheese",
      author: "@PlantBasedDR",
      link: "https://www.instagram.com/reel/ClEXwvAJjfz/",
    },
    {
      id: 7,
      title: "GUNPOWDER TOFU",
      author: "@JohnnyMeatless",
      link: "https://www.instagram.com/reel/ClEe_emqvK6/",
    },
    {
      id: 8,
      title: "Plant-based Lasagne",
      author: "@JensPlantBase",
      link: "https://www.instagram.com/reel/CoxrstNKYhP/",
    },
    {
      id: 9,
      title: "Jamaican Curry Chick'n",
      author: "@JensPlantBase",
      link: "https://www.instagram.com/reel/Cp-mLYDqCjo/",
    },
    {
      id: 10,
      title: "CREAMY MUSHROOM PASTA",
      author: "@HerbiFoods",
      link: "https://www.instagram.com/reel/CiSmbPIqset/",
    },
    {
      id: 13,
      title: "ICED BLUEBERRY MATCHA LATTE",
      author: "@SchoolNightVegan",
      link: "https://www.instagram.com/reel/CtuN0kaKrnZ/",
    },
    {
      id: 18,
      title: "Easy Baklava",
      author: "@FeelGoodFoodie",
      link: "https://www.instagram.com/reel/CcwWjGAAm0P/",
    },
    {
      id: 16,
      title: "3 INGREDIENT ICECREAM",
      author: "@jacobking",
      link: "https://www.instagram.com/reel/CvUbimXqFjm/",
    },
    {
      id: 14,
      title: "Super Fudgy Protein Brownies",
      author: "@FitFoodbyBarbara",
      link: "https://www.instagram.com/reel/ClwhzbIKsDL/",
    },
    {
      id: 15,
      title: "Cinnamon Star Cheesecake",
      author: "@FitFoodbyBarbara",
      link: "https://www.instagram.com/reel/CmHqManKBYQ/",
    },
    {
      id: 11,
      title: "Raspberry Cake",
      author: "@livekindley",
      link: "https://www.instagram.com/reel/CokjksDglLs/",
    },
    {
      id: 17,
      title: "Lemon Berry Ice Cream Bar",
      author: "@TurnipVegan",
      link: "https://www.instagram.com/reel/CpDvOd6vErd/",
    },
    {
      id: 12,
      title: "FLOURLESS FERRERO CAKE",
      author: "@WaytoHealthKitchen",
      link: "https://www.instagram.com/reel/CoIXtoTpz1T/",
    },
    {
      id: 19,
      title: "KEY LIME PIE SQUARES",
      author: "@WaytoHealthKitchen",
      link: "https://www.instagram.com/reel/CoK_d5bJaAS/",
    },
    {
      id: 20,
      title: "VEGAN SPONGE CAKE",
      author: "@FitGreenMind",
      link: "https://www.instagram.com/reel/CplQDsvqQIq/",
    },
    {
      id: 21,
      title: "JERK LAMB KEBABS",
      author: "@Jacobking",
      link: "https://www.instagram.com/reel/CrQ_5NFK0h0/",
    },
    {
      id: 28,
      title: "Beyond Beef Loaded Tots",
      author: "@theveganpigeon",
      link: "https://www.instagram.com/reel/CjOGXcLp01Z/",
    },
    {
      id: 23,
      title: "SIOPAO",
      author: "@FitGreenMind",
      link: "https://www.instagram.com/reel/Ceo0CMXqP6j/",
    },
    {
      id: 24,
      title: "MUSHROOM PATE",
      author: "@NoMeatDisco",
      link: "https://www.instagram.com/reel/CkbQ6XMql5q/",
    },
    {
      id: 25,
      title: "MUHAMMARA",
      author: "@NoMeatDisco",
      link: "https://www.instagram.com/reel/CktXnzEqOkR/",
    },
    {
      id: 26,
      title: "LOBSTER ROLLS",
      author: "@JacobKing",
      link: "https://www.instagram.com/reel/CpA-5fMKDO1/",
    },
    {
      id: 27,
      title: "Pesto Puff Pastry Sticks",
      author: "@micadeli_",
      link: "https://www.instagram.com/reel/ClmOhLxDlhe/",
    },
    {
      id: 22,
      title: "Lemongrass Banh Mi",
      author: "@seonkyounglongest",
      link: "https://www.instagram.com/tv/CO4mrf4hCjT/",
    },
    {
      id: 29,
      title: "Homemade Tofu Cream Cheese",
      author: "@plantbasedrd",
      link: "https://www.instagram.com/reel/CqoJt2tJ0mG/",
    },
    {
      id: 30,
      title: "Yachaejeon",
      author: "@Herbifoods",
      link: "https://www.instagram.com/reel/CpVPZjGKq18/",
    },
    // {
    //   id: ,
    //   title: "",
    //   author: "",
    //   link: "",
    // },
  ]);
};
