var path = require('path');
var express = require('express');
app = express();
var path = require('path');
var http = require('http');
var fs = require('fs');
var port=process.env.PORT || 4200;
// var port = process.env.PORT || 4200; // used to create, sign, and verify tokens
app.use(express.static(path.join(__dirname, 'LoginForm')));


// app.use(express.static('dist'));
app.get('/*', function(req, res) {
            res.sendFile(__dirname + 'LoginForm/index.html'); 
            console.log('aaa')             
    });

// app.all('/*', function(req, res, next) {
//     // CORS headers
//     res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//     // Set custom headers for CORS
//     res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
//     if (req.method == 'OPTIONS') {
//         res.status(200).end();
//     } else {
//         next();
//     }
// });

// start the server 

app.listen(port, '0.0.0.0');
console.log('http://localhost:' + port);
