const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ChapSchema = new Schema({
  title: String,
  page: String,
  tag: String
});

module.exports = mongoose.model('Chapter',ChapSchema);
