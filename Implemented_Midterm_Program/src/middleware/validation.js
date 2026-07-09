function validateTask(req, res, next) {

    const { title, course, completed } = req.body;

    if (
        typeof title !== "string" ||
        title.trim() === "" ||
        typeof course !== "string" ||
        course.trim() === "" ||
        typeof completed !== "boolean"
    ) {
        return res.status(400).json({
            error: "Task must include title, course, and completed."
        });
    }

    next();
}

module.exports = validateTask;