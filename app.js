var express = require('express');
var app = express();
var path = require('path');
var handlebars = require('express-handlebars')
.create({defaultLayout: 'main'});

app.set('view engine', 'handlebars');
app.engine('handlebars', handlebars.engine);

app.set('port', process.env.PORT || 3000);
app.use('/public', express.static(path.join(__dirname+'/public')));

app.get('/', function(req,res){
  res.render('Townsquare', {

  });
});




app.listen(app.get('port'), function(){
  console.log("Hey listen! Port "+ app.get('port')+ " is listening in")
});
