const {
  addNewPerson,
  getPersons,
  getPersonWithID,
  UpdatePerson,
  deletePerson,
} = require("../controllers/personControllers");

const routes = (app) => {
  app
    .route("/persons")
    .get(getPersons)

    .post(addNewPerson);

  app
    .route("/persons/:PersonId")

    .get(getPersonWithID)

    .put(UpdatePerson)

    .delete(deletePerson);
};

module.exports = routes;
