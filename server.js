
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const routes = require('./routes/htmlRoutes');
// const apiRoute = require("./routes/apiRoutes");
const path = require('path');

const PORT = process.env.PORT || 3000;
const app = express();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/workout')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use("/", routes);
// app.use('/api', apiRoute);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
