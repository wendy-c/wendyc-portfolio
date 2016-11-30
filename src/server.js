var express = require('express');
var path = require('path');

var app = express();

console.log(__dirname);
app.use(express.static(__dirname + '/client'));

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('listening on', port);
});
