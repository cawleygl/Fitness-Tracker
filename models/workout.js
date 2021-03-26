const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    id: mongoose.ObjectId,
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
    duration: {
        type: Number,
    },
    distance: {
        type: Number,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
