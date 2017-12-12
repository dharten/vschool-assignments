const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const uuidv4 = require("uuid/v4");

app.use(bodyParser.json());

const port = process.env.PORT || 8000;

app.get("/bounty", (req, res) => {
  console.log(req.query);
  return res.send(data);
})

app.post("/bounty", (req, res) => {
  data.bounty.push(req.body);
  return res.send(data);
})

app.get("/bounty/:id", (req, res) => {
  const bounty = data.bounty.find(bounty => bounty.id == req.params.id)
  return res.send(bounty);
})

app.listen(port, () => {
  console.log("Server is running");
})

const data = { bounty: [] };
