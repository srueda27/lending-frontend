const proxy = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        proxy("/puppy/Sammy", {
            target: "https://shielded-brushlands-56249.herokuapp.com",
            changeOrigin: true
        })
    );
};