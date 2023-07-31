const express = require("express");
const cors = require("cors");
const axios = require("axios");
const knex = require("knex")(require("../kitchenkeepr-be/knexfile"));
const { parse } = require("node-html-parser");
require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");

const app = express();
app.use(cors());
app.use(express.json());

const apiKey = process.env.API_KEY;

const openai = new OpenAIApi(
  new Configuration({
    apiKey: apiKey,
  })
);

// openai terminal prompt that works with apikey

// openai
//   .createChatCompletion({
//     model: "gpt-3.5-turbo",
//     messages: [{ role: "user", content: "Hello ChatGPT" }],
//   })
//   .then((res) => {
//     console.log(res.data.choices[0].message.content);
//   });

app.get("/recipes", (_req, res) => {
  knex("recipes")
    .then((response) => {
      return res.status(200).json(response);
    })
    .catch((error) => {
      res.status(400).send(`error retrieiving recipes ${error}`);
    });
});

app.get("/tags", (_req, res) => {
  knex("tags")
    .then((response) => {
      return res.status(200).json(response);
    })
    .catch((error) => {
      res.status(400).send(`error retrieiving recipes ${error}`);
    });
});

app.get("/taggedRecipes", (req, res) => {
  const id = req.query.tag_id;
  knex("taggedRecipes")
    .where("tag_id", id)
    .join("recipes", "recipe_id", "=", "recipes.id")
    .then((response) => {
      return res.status(200).json(response);
    })
    .catch((error) => {
      res.status(400).send(`error retrieiving recipes ${error}`);
    });
});

app.get("/favourites", (req, res) => {
  knex("favourites")
    .select("*", "favourites.id as id")
    .join("recipes", "recipe_id", "=", "recipes.id")
    .then((response) => {
      return res.status(200).json(response);
    })
    .catch((error) => {
      res.status(400).send(`error retrieiving recipes ${error}`);
    });
});

app.post("/favourites", (req, res) => {
  console.log(req.body);
  knex("favourites")
    .insert({ recipe_id: req.body.id })
    .then((response) => {
      return res.status(200).json(response);
    })
    .catch((error) => {
      res.status(400).send(`error: ${error}`);
    });
});

app.get("/recipes/:id", (req, res) => {
  knex("recipes")
    .where({ id: req.params.id })
    .first()
    .then((recipe) => {
      if (!recipe) {
        return res
          .status(404)
          .json({ message: `Recipe with with ID ${req.params.id} not found` });
      }

      res.status(200).json(recipe);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: `Unable to retrieve recipe with ID ${req.params.id}`,
      });
    });
});

app.delete("/favourites", (req, res) => {
  // console.log(req.body);
  knex("favourites")
    .where({ recipe_id: req.body.recipe_id })
    .del()
    .then((response) => {
      if (response === 0) {
        return res.status(400).json({
          message: `Recipe ID: ${req.params.id} not found. Cannot be deleted`,
        });
      }
      return res.status(200).json(response);
    })
    .catch(() => {
      res.status(400).json({ message: "Unable to delete Recipe" });
    });
});

app.get("/", async (req, res) => {
  const { url } = req.query;
  const caption = await getCaption(url);
  res.json({ caption });
});

app.listen(8080, () => {
  console.log("ok!");
});

async function getCaption(url) {
  const { data } = await axios.get(url);
  const root = parse(data);
  const desc = root.querySelector("meta[property='og:title']");
  const content = desc.getAttribute("content");
  const i = content.indexOf(":");
  return content.slice(i + 2);
}

// a test for the old function

// async function testGenerateIngredientReplacements() {
//   try {
//     const userInput = "sugar";
//     const alternativeIngredients = await generateIngredientReplacements(
//       userInput
//     );
//     console.log("Alternative Ingredients:", alternativeIngredients);
//   } catch (error) {
//     console.error("Error:", error.message);
//   }
// }

// testGenerateIngredientReplacements();

// SANDUN'S TEST CODE

// app.get("/api/generate-replacements/:ingredient", async (req, res) => {
//   const { ingredient } = req.params;

//   try {
//     testOpenAI();
//     res.json("successful");
//   } catch (error) {
//     console.error("Error generating ingredient replacements:", error);
//     res
//       .status(500)
//       .json({ error: "Failed to generate ingredient replacements." });
//   }
// });

// function testOpenAI() {
//   // openai terminal prompt that works with apikey

//   openai
//     .createChatCompletion({
//       model: "gpt-3.5-turbo",
//       messages: [{ role: "user", content: "Hello ChatGPT" }],
//     })
//     .then((res) => {
//       console.log(res.data.choices[0].message.content);
//     });
// }

// testOpenAI();

//Experimental Endpoint for OpenAI function

app.get("/api/generate-replacements/:ingredient", async (req, res) => {
  const { ingredient } = req.params;

  try {
    const replacements = await generateIngredientReplacements(ingredient);
    console.log(replacements);
    res.json({ replacements });
  } catch (error) {
    console.error("Error generating ingredient replacements:", error);
    res
      .status(500)
      .json({ error: "Failed to generate ingredient replacements." });
  }
});

// new text daniel v1

async function generateIngredientReplacements(userInput) {
  const prompt = `You want to replace ${userInput}. Suggest some alternative ingredients.`;

  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error(error);
  }
}
