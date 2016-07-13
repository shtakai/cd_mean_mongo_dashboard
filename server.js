const faker = require('faker');
let express = require('express');
let app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

const path = require('path');

// initialize and connect mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/m_dashboard');


// Schema
const MongooseSchema = new mongoose.Schema({
  name: String
},{
  timestamps: true
});

mongoose.model('Mongoose', MongooseSchema);
const Mongoose = mongoose.model('Mongoose');


app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


//const mongoosesController = {
  //mongooses_new: function(req, res){},
  //mongooses_create: function(req,res){},
  //mongooses_show: function(req, res){},
  //mongooses_destroy: function(req, res){},
  //mongooses_edit: function(req, res){},
  //mongooses_update: function(req, res){},
//}


let server = app.listen(8000, function(){
  console.log('listening on port 8000');
})

