const db = require("../models");
const mongoose = require("mongoose");

module.exports = function (app) {


    // db.Workout.create({ name: "" })
    //     .then(dbWorkout => {
    //         console.log(dbWorkout);
    //     })
    //     .catch(({ message }) => {
    //         console.log(message);
    //     });

    // app.post("/submit", ({ body }, res) => {
    //     db.Exercise.create(body)
    //         .then(({ _id }) => db.Workout.findOneAndUpdate({}, { $push: { exercises: _id } }, { new: true }))
    //         .then(dbWorkout => {
    //             res.json(dbWorkout);
    //         })
    //         .catch(err => {
    //             res.json(err);
    //         });
    // });


    // app.get("/exercise", (req, res) => {
    //     db.Exercise.find({})
    //         .then(dbExercise => {
    //             res.json(dbExercise);
    //         })
    //         .catch(err => {
    //             res.json(err);
    //         });
    // });

    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
              res.json(err);
            });
        });


// app.get("/populated", (req, res) => {
//     db.Workout.find({})
//         .populate("exercises")
//         .then(dbWorkout => {
//             res.json(dbWorkout);
//         })
//         .catch(err => {
//             res.json(err);
//         });
// });
};
