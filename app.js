const express = require('express');
const app = express();
const path = require('path');
const handlebars = require('express-handlebars')
.create({defaultLayout: 'main'});
// const mongoose = require('mongoose');
// var Chap = require('./public/db/Chap.model.js');
// var bodyParser = require('body-parser');
// mongoose.promise = Promise;
// mongoose.connect('mongodb://localhost/bookKeeper');

app.set('view engine', 'handlebars');
app.engine('handlebars', handlebars.engine);

app.set('port', process.env.PORT || 3000);
app.use('/public', express.static(path.join(__dirname+'/public')));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended:true
// }));

app.get('/', function(req,res){
  res.render('Townsquare', {

  });
});
app.get('/newChapter',function(req,res){
  res.render('addNewChapter',{

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
app.get('/Chapters/:title', function(req,res){
  res.render('page',{
    page:req.params.page,
    title: req.params.title
  });
  console.log('geting one Chapter');
  Chap.findOne({
    title: req.params.title
  })
  .exec(function(err,chapters){
    if(err){
      res.send('error has occured');
    }else{
      res.json(chapters);
    }
  });
});

app.post('/addNewChapter',function(req,res){
  var newChapter = new Chap();
  newChapter.title = req.body.title;
  newChapter.page = req.body.page;

  newChapter.save(function(err,chapters){
    if(err){
      res.send('error saving book');
    }else{
      console.log(chapters);
      res.send(chapters);
    }
  });
});
// app.post('/newChap2',function(req,res){
//   Chap.create(req.body,function(err,book){
//     if(err){
//       res.send('error creating Chap');
//     }else{
//       console.log(Chap);
//       res.send(Chap);
//     }
//   })
// })

app.listen(app.get('port'), function(){
  console.log("Hey listen! Port "+ app.get('port')+ " is listening in")
});
