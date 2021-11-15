const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseRoutineSchema = new Schema({
  _id: Schema.Types.ObjectId,
  exerciseCardio: [{ type: 'cardio', ref: 'Cardio' }],
  exerciseResistance: [{ type: 'resistance', ref: 'Resistance' }],

});

const exerciseRoutine = mongoose.model("exerciseRoutine", exerciseRoutineSchema);

module.exports = exerciseRoutine;