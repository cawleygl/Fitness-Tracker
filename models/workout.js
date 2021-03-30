const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
        },
        name: {
            type: String,
            trim: true,
        },
        duration: {
            type: Number,
        },
        weight: {
            type: Number,
        },
        sets: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        distance: {
            type: Number,
        },    
    }],
});

workoutSchema.methods.addDuration = function() {
    for (i of this.exercises) {
        this.totalDuration = this.totalDuration + i.duration;
    }
    return this.totalDuration;
  };
  
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
