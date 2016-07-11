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
  var _mongooses_array = Mongoose.find({}, function(err, _mongooses){
    if(err){
      console.log('something went wrong', err);
      res.json(err);
    }else{
      console.log('get mongooses');
      res.render('index',{mongooses: _mongooses});
    }
  })
})

// new is over the /:id
app.get('/mongooses/new', function(req, res){
  console.log('new');
  res.render('new');
})





app.get('/mongooses/:id', function(req,res){
  console.log('show', req.params.id);
  Mongoose.findOne(
    {
      _id: req.params.id
    }, function(err, _mongoose ){
      if(err){
        console.log('something went wrong', err);
        res.json(err);
      }else{
        console.log('get one mongoose', _mongoose);
        res.render('show',{mongoose: _mongoose});
      }
    }
  )
})

app.get('/mongooses/:id/destroy', function(req,res){
  console.log('destroy', req.params.id);
  Mongoose.remove(
    {
      _id: req.params.id
    }, function(err ){
      if(err){
        console.log('something went wrong', err);
        res.json(err);
      }else{
        console.log('destroy one mongoose', req.params.id);
        res.redirect('/');
      }
    }
  )
})




app.get('/mongooses/:id/edit', function(req, res){
  console.log('edit');
  req.render('edit');
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

