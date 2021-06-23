const express = require('express');
const app = express();
const path = require('path');

//pull in api routes
const routes = require('./routes');

//middle ware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

//off load api routes to clean up file
app.use(routes);

//send static html
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(3001, () => console.log('Running on port 3001'));