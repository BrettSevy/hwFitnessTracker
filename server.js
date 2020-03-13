
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(express.static("public"));

//Routes
require("./routes/api.js")(app);
require("./routes/view.js")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
  
});