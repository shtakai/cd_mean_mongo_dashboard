const faker = require('faker');
let express = require('express');
let app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const path = require('path');

app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

require('./server/config/mongoose.js');


let routes_setter = require('./server/config/routes.js');
routes_setter(app);

let server = app.listen(8000, function(){
  console.log('listening on port 8000');
})

