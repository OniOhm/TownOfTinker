const express = require('express');
const app = express();
const path = require('path');
const handlebars = require('express-handlebars')
.create({defaultLayout: 'main'});
const mongoose = require('mongoose');
var Chap = require('./public/db/Chap.model.js');
var bodyParser = require('body-parser');
mongoose.promise = Promise;
mongoose.connect('mongodb://Oni:11111a@ds145128.mlab.com:45128/mean_jamez');

app.set('view engine', 'handlebars');
app.engine('handlebars', handlebars.engine);

app.set('port', process.env.PORT || 3000);
app.use('/public', express.static(path.join(__dirname+'/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true
}));

app.get('/', function(req,res){
Chap.find( )
  .exec(function(err,chap){
    if(err){
      res.sendStatus(500);
    }else{
      res.render('Townsquare',{
        chaplist: chap
      });
    }
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
      res.render('bookshelf',{
        chaplist: chapters
      });
    }
  });
});
// app.get('/Chapters/:title', function(req,res){
//   res.render('page',{
//     page:req.params.page,
//     title: req.params.title
//   });
//   console.log('geting one Chapter');
//   Chap.findOne({
//     title: req.params.title
//   })
//   .exec(function(err,chapters){
//     if(err){
//       res.send('error has occured');
//     }else{
//       res.json(chapters);
//     }
//   });
// });

app.post('/addNewChapter',function(req,res){
  var newChapter = new Chap();
  newChapter.title = req.body.title;
  newChapter.page = req.body.page;

  newChapter.save(function(err,chapters){
    if(err){
      res.send('error saving book');
    }else{
      res.redirect('/');
    }
  });
});
app.post('/getChapter', function(req,res){
  var name = req.body.title;
  Chap.findOne({ title : name })
  .exec(function(err,chap){
    if(err){
      res.render('errorpage');
    }else{
      res.render('singlePage',{
        title : chap.title,
        page: chap.page
      });
    }
  });
});
app.post('/deleteChapter', function(req,res){
  Chap.remove({ title: req.body.deleteThis})
  .exec(function(err,chap){
    if(err){
      res.send('Something didnt work');
    }else{
      res.redirect('/');
    }
  });
});
app.post('/FindUpdateChapter', function(req,res){
  var name = req.body.updatetitle;
  Chap.findOne({ title : name })
  .exec(function(err,chap){
    if(err){
      res.render('errorpage');
    }else{
      res.render('updateChapter',{
        title : chap.title,
        page: chap.page
      });
    }
  });
});
app.post('/UpdateChapter',function(req,res){
  Chap.findOneAndUpdate({title: req.body.updateTitle},{ page: req.body.updatePage})
    .exec(function(err){
      if(err){
        res.send('something went wrong');
      }else{
        res.redirect('/');
      }
    })
})
app.listen(app.get('port'), function(){
  console.log("Hey listen! Port "+ app.get('port')+ " is listening in")
});
