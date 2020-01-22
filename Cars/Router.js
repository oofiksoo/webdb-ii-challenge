const express = require("express");
const db = require("../data/db-config.js");
const router = express.Router();
const Cars = require("./Model.js");

router.get("/", (req, res) => {
    Cars.list("Cars")
        .then(cars => {
            res.json(cars);
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to get cars" });
        });
});

router.get("/:id", (req, res) => {
    Cars.listbyid(req.params.id)
        .then(car => {
            if (car) {
                res.json(car);
            } else {
                res.status(404).json({ message: "Could not find car with given id." });
            }
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to get car" });
        });
});

router.post("/", (req, res) => {
    Cars.postcar(req.body)
        .then(new_car => {
            res.status(201).json(new_car);
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to create new car" });
        });
});

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    db("cars")
        .where({ id })
        .update(changes)
        .then(count => {
            if (count) {
                res.json({ update: count });
            } else {
                res.status(404).json({ message: "Could not find car with given id" });
            }
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to update car" });
        });
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;

    db("cars")
        .where({ id })
        .del()
        .then(count => {
            if (count) {
                res.json({ removed: count });
            } else {
                res.status(404).json({ message: "Could not find car with given id" });
            }
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to delete car" });
        });
});

module.exports = router;