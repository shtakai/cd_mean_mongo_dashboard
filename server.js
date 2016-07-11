var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

var path = require('path');

// initialize and connect mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/m_dashboard');


// Schema
var MongooseSchema = new mongoose.Schema({
  name: String
});

mongoose.model('Mongoose', MongooseSchema);
var Mongoose = mongoose.model('Mongoose');


app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  console.log('access /');
  res.render('index');
})



var server = app.listen(8000, function(){
  console.log('listening on port 8000');
})

