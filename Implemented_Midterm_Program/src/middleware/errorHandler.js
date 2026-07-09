function errorHandler(err, req, res, next) {
    console.error(err);

    res.status(500).json({
        error: "Something went unexpectedly wrong! May be an internal server error."
    });
}

module.exports = errorHandler;