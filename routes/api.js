const db = require("../models");
const mongoose = require("mongoose");

module.exports = function (app) {

    app.get("/api/workouts", (req, res) => {
        db.workout.find({})
            .then(dbworkout => {
                res.json(dbworkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.post("/api/workouts", ({ body }, res) => {
        db.workout.create(body)
            .then(dbworkout => {
                res.json(dbworkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.put("/api/workouts/:id", (req, res) => {
        console.log(req.body);
        db.workout.update({ _id: mongoose.mongo.ObjectId(req.params.id) }, { $push: { exercises: req.body } })
            .then(dbworkout => {
                res.json(dbworkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.get("/api/workouts/range", (req, res) => {
        db.workout.find({})
            .then(dbworkout => {
                res.json(dbworkout);
            })
            .catch(err => {
                res.json(err);
            })
    });


};
