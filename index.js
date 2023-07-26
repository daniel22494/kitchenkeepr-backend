const express = require("express");
const cors = require("cors");
const axios = require("axios");
const { parse } = require("node-html-parser");

const app = express();
app.use(cors());

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
