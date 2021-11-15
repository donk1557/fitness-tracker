const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardioSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Input name"
  },

  duration: {
    type: Number,
    required: true
  },

  distance: {
    type: Number,
    required: true
  },

});

const Cardio = mongoose.model("Cardio", CardioSchema);

module.exports = Cardio;