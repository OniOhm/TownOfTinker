const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ChapSchema = new Schema({
  title: String,
  page: String
});

module.exports = mongoose.model('Chapter',ChapSchema);
