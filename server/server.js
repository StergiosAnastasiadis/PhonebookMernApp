const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes/phonebookRoutes");

const app = express();
const PORT = process.env.PORT || 4000;

mongoose.Promise = global.Promise;

mongoose.connect(process.env.DATABASE_URL || "localhost:", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("../frontend/build"));

app.use(cors());

routes(app);

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "../client/build")));

  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Your Application is running on port ${PORT}`);
});
