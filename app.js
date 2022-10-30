var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var mainRouter = require('./routes/main');
var locationSelectRouter = require('./routes/location_select');
var finalRouter = require('./routes/final');
var cancelRouter = require('./routes/cancel');
var rapidRouter = require('./routes/rapid');
var slowRouter = require('./routes/slow');
var slow1Router = require('./routes/slow1');
var rapid1Router = require('./routes/rapid1');
var rapid2Router = require('./routes/rapid2');
var final1Router = require('./routes/final1');
var final2Router = require('./routes/final2');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/main', mainRouter);
app.use('/locationSelect', locationSelectRouter);
app.use('/final', finalRouter);
app.use('/cancel', cancelRouter);
app.use('/rapid', rapidRouter);
app.use('/slow', slowRouter);
app.use('/rapid1', rapid1Router);
app.use('/rapid2', rapid2Router);
app.use('/slow1', slow1Router);
app.use('/final1', final1Router);
app.use('/final2', final2Router);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
