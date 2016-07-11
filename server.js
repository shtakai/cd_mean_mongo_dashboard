var faker = require('faker');
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
  var mongooses = Mongoose.find({}, function(err, mongooses){
    if(err){
      console.log('something went wrong', err);
      res.json(err);
    }else{
      console.log('get mongooses');
      res.render('index',{mongooses: mongooses});
    }
  })
})


  //var name = faker.name.findName();
  //console.log('create ',name);
  //var hamstar = new Mongoose({
    //name: name
  //});
  //hamstar.save(function(err){
    //if(err){
      //console.log('something went wrong');
      //res.json(err);
    //}
    //else{
      //console.log('saved ;)', hamstar);
      //res.redirect('index');
    //}
  //})

var server = app.listen(8000, function(){
  console.log('listening on port 8000');
})

