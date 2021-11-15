
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const app = express();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/workout')

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
