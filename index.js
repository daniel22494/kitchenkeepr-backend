require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors({ origin: process.env.CORS_ORIGIN }));

app.listen(PORT, () => {
  console.log("server started on port", PORT);
});
