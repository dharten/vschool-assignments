const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use("/people", require("./routes/inventory"))

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/crud-store",
  {useMongoClient: true},
  (err) => {
    if (err) throw err;
  }
);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})
