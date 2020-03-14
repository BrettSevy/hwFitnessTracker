const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Exercise type is Required"
            },
            name: {
                type: String,
                trim: true,
                required: "Exercise name is Required"
            },
            duration: {
                type: Number,
                required: "Duration type is Required"
            },
            weight: { 
                type: Number
            },
            reps: { 
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
    ]
});

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;