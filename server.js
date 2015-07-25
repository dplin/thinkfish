var express = require('express');
var exphbs  = require('express-handlebars');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var routes = require('./app/routes/index');
//var users = require('./app/routes/users');

var app = express();

// MongoDB connection
mongoose.connect('mongodb://thinkfish:thinkfish@ds049848.mongolab.com:49848/thinkfish');

// Needed for Nodemon
var port = Number(process.env.PORT || 4000);
app.listen(port);

// view engine setup
app.engine('handlebars', exphbs({layoutsDir: "app/views/layouts/", defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('views', './app/views');

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
//app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;

  // Intercept 404 and redirect it to home page.
  res.writeHead(301, {Location: 'http://localhost:4000/'});
  res.end();

  //next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
