const proxy = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        proxy(["/api", , "/otherApi"], { target: "https://shielded-brushlands-56249.herokuapp.com" })
    );
};