const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost");

const Schema = mongoose.Schema;

const databaseSchema = new Schema(
  {
    a: Number,
    b: Number,
    c: Number
  }
)

let Database = mongoose.model("Database", databaseSchema)

const one = new Database({a: 1,b: 1,c: 2})
const two = new Database({a: 0,b: 0,c: 2})
const three = new Database({a: 0,b: 1,c: 0})
const four = new Database({a: 1,b: 2,c: 2})

// one.save((err, one) => {
//   console.log("one", one);
// })
//
// two.save((err, two) => {
//   console.log("two", two);
// })
//
// three.save((err, three) => {
//   console.log("three", three);
// })
//
// four.save((err, four) => {
//   console.log("four", four);
// })

Database.find((err, data) => {
  console.log("one", one.a, one._id);
  console.log("two", two.b);
  console.log("three", three.c);
  console.log("four", four);
  console.log("all A's", one.a, two.a, three.a, four.a);
})

// Database.findOne({ _id: "5a3007ae74f9cd185f9a95a1"}, (err, data) => {
//   data.d = "yesterday";
//   data.save((err, data) => {
//     console.log(data);
//   })
// })
