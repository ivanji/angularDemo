var express = require('express');
var path = require('path');
var app =  express();
var rooPath = path.normalize(__dirname + '/../');

app.use(express.static(rooPath + '/app'));
app.listen(8000);

console.log("Listening on Port 8000");
