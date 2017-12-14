const express = require("express");
const peopleRoutes = express.Router();
const People = require("../models/inventory");

peopleRoutes.route("/")
  .get((req, res) => {
    People.find((err, people) => {
      if (err) return res.status(500).send(people);
      res.send(people);
    })
  })
  .post((req, res) => {
    const newPerson = new People(req.body);
    newPerson.save((err) => {
      if (err) return res.status(500).send(err);
      res.status(201).send(newPerson);
    })
  })

peopleRoutes.route("/:id")
  .get((req, res) => {
    People.findById(req.params.id, (err, person) => {
      if (err) return res.status(500).send(err);
      res.send(person)
    })
  })
  .delete((req, res) => {
    People.findByIdAndRemove(req.params.id, (err, person) => {
      if (err) return res.status(500).send(err);
      res.send({message: "removed", person})
    })
  })
  // .put((req, res) => {
  //   People.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, person) => {
  //     if (err) return res.status(500).send(err);
  //     res.send({message: "updated", person})
  //   })
  // })

  .put((req, res) => {
    People.findById(req.params.id, (err, person) => {
      if (err) return res.status(500).send(err);
      if (req.body.address) {
        person.address = Object.assign(person.location, req.body.location)
      }
    })
  })

// peopleRoutes.put("/:id/address", (req, res) => {
//   People.findById(req.params.id, (err, data) => {
//     if (err) return res.status(500).send(err);
//     let update = {};
//     for(let key in data.address) {
//       update[key] = req.body[key] || data.address[key];
//     }
//     People.findByIdAndUpdate(req.params.id, {$set: {"address": update}}, {new: true}, (err, person) => {
//       if (err) return res.status(500).send(err);
//       res.send({message: "updated", person});
//     });
//   });
// });

module.exports = peopleRoutes;
