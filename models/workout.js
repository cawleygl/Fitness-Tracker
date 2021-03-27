const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    id: mongoose.ObjectId,
    totalDuration: {
        type: Number,
    },
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        name: {
            type: String,
            trim: true,
            required: "Enter a name for workout"
        },
        type: {
            type: String,
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
    }]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
