const mongoose = require('mongoose');


// Schema
const MongooseSchema = new mongoose.Schema({
  name: String
},{
  timestamps: true
});

mongoose.model('Mongoose', MongooseSchema);
