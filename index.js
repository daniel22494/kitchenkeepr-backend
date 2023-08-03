const express = require("express");
const cors = require("cors");
const axios = require("axios");
const knex = require("knex")(require("./knexfile"));
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

//Retrieves All recipes

app.get("/recipes", (_req, res) => {
  knex("recipes")
    .then((response) => {
      return res.status(200).json(response);
    })
    .catch((error) => {
      res.status(400).send(`error retrieiving recipes ${error}`);
    });
});

//Retrieves Tags/Categories

app.get("/tags", (_req, res) => {
  knex("tags")
    .then((response) => {
      return res.status(200).json(response);
    })
    .catch((error) => {
      res.status(400).send(`error retrieiving recipes ${error}`);
    });
});

//Retrieves categorized recipes from a joint table (recipes/tags)

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

//Retrieves a list of recipes in favourites folder

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

//Posts new favourites

app.post("/favourites", (req, res) => {
  const recipeIdToAdd = req.body.id;

  knex("favourites")
    .where({ recipe_id: recipeIdToAdd })
    .first()
    .then((existingRecipe) => {
      if (existingRecipe) {
        return res
          .status(400)
          .json({ message: "Recipe already added to favourites" });
      }
      knex("favourites")
        .insert({ recipe_id: recipeIdToAdd })
        .then((response) => {
          return res.status(200).json(response);
        })
        .catch((error) => {
          res
            .status(400)
            .json({ message: "Error inserting recipe to favourites", error });
        });
    })
    .catch((error) => {
      res.status(400).json({ message: "Error checking favourites", error });
    });
});

//Retrieves individual recipes and their information

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

      getCaption(recipe.link)
        .then((caption) => {
          recipe.caption = caption;
          res.json(recipe);
        })
        .catch((error) => {
          console.log(error);
          res.status(500).send("something went wrong with the caption");
        });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: `Unable to retrieve recipe with ID ${req.params.id}`,
      });
    });
});

//deletes recipes from favourites

app.delete("/favourites", (req, res) => {
  console.log(req.body);
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

//calls function that parses URL for text (used with indiviual recipe diplay)

app.get("/caption", async (req, res) => {
  const { url } = req.query;
  const caption = await getCaption(url);
  res.json({ caption });
});

async function getCaption(url) {
  const { data } = await axios.get(url);
  console.log(data);
  const root = parse(data);
  const desc = root.querySelector("meta[property='og:title']");
  const content = desc.getAttribute("content");
  const i = content.indexOf(":");
  return content.slice(i + 2);
}

//OPENAI API call to generate ingredient

app.get("/api/generate-replacements/:ingredient", async (req, res) => {
  const { ingredient } = req.params;

  try {
    const replacements = await generateIngredientReplacements(ingredient);
    res.json({ replacements });
  } catch (error) {
    console.error("Error generating ingredient replacements:", error);
    res
      .status(500)
      .json({ error: "Failed to generate ingredient replacements." });
  }
});

//funtion used for prompting OPENAI

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

//PORT

app.listen(process.env.PORT, () => {
  console.log("ok!");
});
