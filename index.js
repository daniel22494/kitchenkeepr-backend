const express = require("express");
const cors = require("cors");
const axios = require("axios");
const knex = require("knex")(require("../kitchenkeepr-be/knexfile"));
const { parse } = require("node-html-parser");

const app = express();
app.use(cors());

app.get("/recipes", (_req, res) => {
  /// get knex('recipes').then(r => res.json(r))
  knex("recipes")
    .then((response) => {
      return res.status(200).json(response);
    })
    .catch((error) => {
      res.status(400).send(`error retrieiving recipes ${error}`);
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

// getCaption("https://www.instagram.com/p/B_UC-cQJtXG/").then((caption) => {
//   console.log(caption);
// });

// getCaption("https://www.instagram.com/reel/CjxmT0oJkJH/").then((caption) => {
//   console.log(caption);
// });
