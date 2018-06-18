var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

var book = require('./routes/book');
var app = express();

var clientIdentifier;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
/* app.use('/client/:id', function(req,res,next){
  //console.log(path.join(__dirname, 'dist/' + clientIdentifier))
  if(req.params.id){
    console.log(req.params.id)
    clientIdentifier = req.params.id;
  }
  console.log(path.join(__dirname, 'dist/' + clientIdentifier))
  app.use('/',express.static(path.join(__dirname, 'dist/' + clientIdentifier)));
   app.use('/client'+clientIdentifier, express.static(path.join(__dirname, 'dist/' + clientIdentifier)));

  next();
}) */
app.use('/',express.static(path.join(__dirname, 'dist/hisysmc')))
app.use('/hisysmc', express.static(path.join(__dirname, 'dist/hisysmc')));
app.use('/shopclues', express.static(path.join(__dirname, 'dist/shopclues')));

app.use('/api', book);

//main get Route 
/* app.get('/client/:id', function(req,res,next){
  //console.log(clientIdentifier)
  res.sendFile("index.html")
  //res.send("pppp")
}) */

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   console.log(err)
//   //res.render('error');
// });
module.exports = app;
