export const E500 = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Internal Server Error";

    res.status(status);
    res.render("error", { status, message });
};

export const E404 = (err, req, res, next) => {
    res.status(404).render("error", { status: 404, message: "Page Not Found" });
};
