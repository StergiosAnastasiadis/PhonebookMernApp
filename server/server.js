const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes/phonebookRoutes");

const app = express();
const PORT = process.env.PORT || 4000;

mongoose.Promise = global.Promise;

// DB Connection
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Configure Body Parser for requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Static file Serve Static
app.use(express.static('../frontend/build'));

app.use(cors());

routes(app);


if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, '../client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Your Application is running on port ${PORT}`);
});
