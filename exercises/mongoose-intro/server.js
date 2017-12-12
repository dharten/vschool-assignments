const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/friends");

const Schema = mongoose.Schema;

const friendSchema = new Schema(
  {
    name: String,
    age: Number,
    interests: [String],
    friends: [String]
  }
);

const Friend = mongoose.model("Friend", friendSchema)

const myFriend = new Friend(
  {
    name: "Dan",
    age: 31,
    interests: ["finding", "allowing", "following through"],
    friends: []
  }
)

// myFriend.save((err, friends) => {
//   console.log("friend saved", friends);
// })

// Friend.findOne({ name: "Dan" },(err, friend) => {
//   console.log(friend);
//   friend.name = "Dan Harten"
//   friend.save((err, friend) => {
//     console.log(friend, "Successfully updated");
//   })
//   // friend.remove((err, friend) => {
//   //   console.log("Successfully removed", friend);
//   // })
// })

Friend.find((err, friends) => {
  console.log("all friends", friends);
})
