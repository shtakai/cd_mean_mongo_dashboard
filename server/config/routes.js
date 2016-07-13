const mongoose = require('mongoose');
const Mongoose = mongoose.model('Mongoose');

let mongoosesController = require('../controllers/mongooses.js');

module.exports = function(app){

  app.get('/', function(req, res){
    mongoosesController.mongooses_index(req, res);
  })
  app.get('/mongooses/new', function(req, res){
    mongoosesController.mongooses_new(req, res);
  })
  app.post('/mongooses', function(req, res){
    mongoosesController.mongooses_create(req, res);
  })
  app.get('/mongooses/:id', function(req,res){
    mongoosesController.mongooses_show(req, res);
  })
  app.get('/mongooses/:id/destroy', function(req,res){
    mongoosesController.mongooses_destroy(req, res);
  })
  app.get('/mongooses/:id/edit', function(req, res){
    mongoosesController.mongooses_edit(req, res);
  })
  app.post('/mongooses/:id/', function(req, res){
    mongoosesController.mongooses_update(req, res);
  })

}
