var express = require('express');
var path = require('path');

var app = express();

app.use(express.static('./client'));

app.listen(3000, function() {
  console.log('listening on 3000!');
});