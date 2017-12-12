const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const port = process.env.PORT || 8000

app.use(bodyParser.json())

app.get("/candy", (req, res) => {
  return res.send(data.candy);
})

app.get("/fruit", (req, res) => {
  return res.send(data.fruit);
})

app.post("/candy", (req, res) => {
  data.candy.push(req.body);
  return res.send(data)
})

app.post("/fruit", (req, res) => {
  data.fruit.push(req.body);
  return res.send(data)
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

const data = {fruit: [], candy: []}
