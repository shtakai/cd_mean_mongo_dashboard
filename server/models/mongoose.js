mongoose = require('mongoose');
// Schema
const MongooseSchema = new mongoose.Schema({
  name: String
},{
  timestamps: true
});

const Mongoose = mongoose.model('Mongoose', MongooseSchema);
