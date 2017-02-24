const express = require('express');
const app = express();
const path = require('path');
const handlebars = require('express-handlebars')
.create({defaultLayout: 'main'});
const mongoose = require('mongoose');
var Chap = require('./public/db/Chap.model.js');
mongoose.promise = Promise;
mongoose.connect('mongodb://localhost/bookKeeper');

app.set('view engine', 'handlebars');
app.engine('handlebars', handlebars.engine);

app.set('port', process.env.PORT || 3000);
app.use('/public', express.static(path.join(__dirname+'/public')));

app.get('/', function(req,res){
  res.render('Townsquare', {

  });
});
app.get('/Archive', function(req,res){
  Chap.find({})
  .exec(function(err,chapters){
    if(err){
      res.send('error has occued');
    }else{
      res.json(chapters);
    }
  });
});

app.listen(app.get('port'), function(){
  console.log("Hey listen! Port "+ app.get('port')+ " is listening in")
});
