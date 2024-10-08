const express = require("express");
const mongoose = require("mongoose");
var path = require('path');
var router = express.Router();

const PORT = process.env.PORT || 3000;
const uri = process.env.MONGODB_URI || "mongodb://localhost/fitnessTracker";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, '/public')));
app.use('/', router);

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/html-routes.js"));
app.use(require("./routes/api-routes.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
