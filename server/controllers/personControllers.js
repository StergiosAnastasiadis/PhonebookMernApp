const mongoose = require("mongoose");
const PersonSchema = require("../models/personModel");

const Person = mongoose.model("Person", PersonSchema);

const addNewPerson = (req, res) => {
  let newPerson = new Person(req.body);

  newPerson.save((err, Person) => {
    if (err) {
      res.send(err);
    }
    res.json(Person);
  });
};

const getPersons = (req, res) => {
  Person.find({}, (err, Person) => {
    if (err) {
      res.send(err);
    }
    res.json(Person);
  });
};

const getPersonWithID = (req, res) => {
  Person.findById(req.params.PersonId, (err, Person) => {
    if (err) {
      res.send(err);
    }
    res.json(Person);
  });
};

const UpdatePerson = (req, res) => {
  Person.findOneAndUpdate(
    { _id: req.params.PersonId },
    req.body,
    { new: true },
    (err, Person) => {
      if (err) {
        res.send(err);
      }
      res.json(Person);
    }
  );
};

const deletePerson = (req, res) => {
  Person.deleteOne({ _id: req.params.PersonId }, (err, Person) => {
    if (err) {
      res.send(err);
    }
    res.json({
      message: "Successfully deleted person",
    });
  });
};

module.exports = {
  addNewPerson,
  getPersons,
  getPersonWithID,
  UpdatePerson,
  deletePerson,
};
