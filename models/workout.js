const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    _id: mongoose.ObjectId,
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
            required: "Enter a name for workout"
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
    
    totalDuration: Number,

});

workoutSchema.methods.addDuration = function() {
    this.totalDuration = 0;
    for (i of this.exercises) {
        this.totalDuration = this.totalDuration + i.duration;
    }
    return this.totalDuration;
  };
  
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
