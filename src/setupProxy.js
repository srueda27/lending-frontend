const proxy = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        proxy("/validate_loan", {
            target: "https://vast-chamber-74293.herokuapp.com",
            changeOrigin: true,
            secure: false
        })
    );
};