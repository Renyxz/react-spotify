const api = require('./spotify-api');

// Implicit Grant Auth variables
const client = {

    client_id: 'df2860e01b3444c497c9d5580e5bc6c6',
    response_type: 'token',
    redirect_uri: 'http://localhost:3000',

};

// Gets the authentication URI
const AUTH_URI = api.getAuthURI(client);

module.exports = AUTH_URI;