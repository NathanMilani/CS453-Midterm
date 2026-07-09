const express = require("express");
const taskRoutes = require("./routes/tasks");
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(express.json());
app.use(logger);

app.get("/health", (req, res) => {
    res.status(200).json({ status: "ok" });
});

app.use("/api/tasks", taskRoutes);

app.use(errorHandler);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});