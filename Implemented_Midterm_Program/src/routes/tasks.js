const express = require("express");
const validateTask = require("../middleware/validation");

const router = express.Router();

let tasks = [];
let nextId = 1;

function findTaskById(id) {
    return tasks.find((task) => task.id === id);
}

router.get("/", (req, res) => {
    res.status(200).json(tasks);
});

router.get("/:id", (req, res) => {
    const task = findTaskById(req.params.id);

    if (!task) {
        return res.status(404).json({ error: "Task not found" });
    }

    res.status(200).json(task);
});

router.post("/", validateTask, (req, res) => {
    const newTask = {
        id: String(nextId++),
        title: req.body.title,
        course: req.body.course,
        completed: req.body.completed
    };

    tasks.push(newTask);

    res.status(201).json(newTask);
});

router.put("/:id", validateTask, (req, res) => {
    const index = tasks.findIndex((task) => task.id === req.params.id);

    if (index === -1) {
        return res.status(404).json({ error: "Task not found" });
    }

    const replacedTask = {
        id: req.params.id,
        title: req.body.title,
        course: req.body.course,
        completed: req.body.completed
    };

    tasks[index] = replacedTask;

    res.status(200).json(replacedTask);
});

router.patch("/:id", (req, res) => {
    const task = findTaskById(req.params.id);

    if (!task) {
        return res.status(404).json({ error: "Task not found" });
    }

    if (
        req.body.title !== undefined &&
        (typeof req.body.title !== "string" || req.body.title.trim() === "")
    ) {
        return res.status(400).json({ error: "Invalid title" });
    }

    if (
        req.body.course !== undefined &&
        (typeof req.body.course !== "string" || req.body.course.trim() === "")
    ) {
        return res.status(400).json({ error: "Invalid course" });
    }

    if (
        req.body.completed !== undefined &&
        typeof req.body.completed !== "boolean"
    ) {
        return res.status(400).json({ error: "Invalid completed value" });
    }

    if (req.body.title !== undefined) {
        task.title = req.body.title;
    }

    if (req.body.course !== undefined) {
        task.course = req.body.course;
    }

    if (req.body.completed !== undefined) {
        task.completed = req.body.completed;
    }

    res.status(200).json(task);
});

router.delete("/:id", (req, res) => {
    const index = tasks.findIndex((task) => task.id === req.params.id);

    if (index === -1) {
        return res.status(404).json({ error: "Task not found" });
    }

    tasks.splice(index, 1);

    res.status(204).send();
});

module.exports = router;