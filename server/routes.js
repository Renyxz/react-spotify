const authURI = require('./api/auth_uri');

const routes = (app) => {

    // Authentication (Implicit Grant Flow)
    app.get('/auth', (req, res, next) => {
        res.send({ auth_uri: authURI });
    });

}

module.exports = routes;