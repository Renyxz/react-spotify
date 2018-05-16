const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');


// App
const app = express();


// Configurations

// parse application/json
app.use(bodyParser.json({ type: '*/*' }));



// Routes
routes(app);


// Server
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('Listening on port: ', port);
});
