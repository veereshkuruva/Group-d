const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const { readdirSync } = require("fs");

const app = express();

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());

// routes middleware
readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

module.exports = app;
