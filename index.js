var express = require('express');

var app = express();

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/yo', function(req, res){
  res.send('yo');
});

app.use(express.static('public'));

var port = 3000;
app.listen(port);

console.log('Hatcher is running fast on port ' + port);
