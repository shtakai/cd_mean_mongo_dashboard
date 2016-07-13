

module.exports = function(app){

  app.get('/', function(req, res){
    console.log('access /');
    let _mongooses_array = Mongoose.find({}, function(err, _mongooses){
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

  app.post('/mongooses', function(req, res){
    console.log('create');
    console.log('req.body', req.body);
    let _mongoose = new Mongoose();
    _mongoose.name = req.body.name;
    _mongoose.save(function(err){
      if(err){
        console.log('something went wrong', err);
        res.json(err);
      }else{
        console.log('mongoose created', _mongoose);
        res.redirect('/');
      }
    })
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
    Mongoose.findOne(
      {
        _id: req.params.id
      }, function(err, _mongoose ){
        if(err){
          console.log('something went wrong', err);
          res.json(err);
        }else{
          console.log('get one mongoose', _mongoose);
          res.render('edit',{mongoose: _mongoose});
        }
      }
    )
  })

  app.post('/mongooses/:id/', function(req, res){
    console.log('update',req.params.id);
    console.log('req.body', req.body);
    Mongoose.update(
      {_id: req.params.id},
      {name: req.body.name}
      ,function(err){
        if(err){
          console.log('something went wrong',err);
          res.json(err);
        }else{
          console.log('update okay ok ok');
          res.redirect('/');
        }
      }
    )
  })

}
