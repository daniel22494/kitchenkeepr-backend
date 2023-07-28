const express = require("express");
const cors = require("cors");
const axios = require("axios");
const knex = require("knex")(require("../kitchenkeepr-be/knexfile"));
const { parse } = require("node-html-parser");

const app = express();
app.use(cors());
app.use(express.json());

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
