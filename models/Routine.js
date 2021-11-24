const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoutineSchema = new Schema({
  _id: Schema.Types.ObjectId,
  day: {
    type: Date,
  },
  exercises: [
  {
    type: {
      type: String,
      enum: { values:['resistance', 'cardio'], message: '{VALUE} not valid' },
      trim: true,
      required: true
    },
    name: {
      type: String,
      trim: true,
      required: "Input name"
    },
  
    weight: {
      type: Number,
      required: false
    },
  
    sets: {
      type: Number,
      required: false
    },
  
    reps: {
      type: Number,
      required: false
    },

    distance: {
      type: Number,
      required: false
    },
  
    duration: {
      type: Number,
      required: true
    },
  }
  ],

});

const Routine = mongoose.model("Routine", RoutineSchema);

module.exports = Routine;