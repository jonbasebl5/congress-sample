var express = require('express');

var app = express();

app.get('/yo', function(req, res){
  res.send('yo');
});

var port = 3000;
app.listen(port);

console.log('Hatcher is running fast on port ' + port);
