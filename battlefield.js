const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({extended: true})); //allows app to use bodyParser. urlencoded gets data 

app.use(express.static(__dirname + '/static'));

app.use(express.static(__dirname + '/'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/', function(req, res) {
})

app.listen(8000, function () {
    console.log('Listening on port 8000');
});


