var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cors = require("cors")
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose= require("mongoose")

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/guest_data');
var cardData = require("./routes/card_Data");
var Address = require("./routes/Address")
var destination =require("./routes/Destination")
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/card', cardData);
app.use("/Address",Address)
app.use("/destination",destination)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

//data base conneting  using mongoose
mongoose.connect("mongodb://127.0.0.1:27017/Hotel_db").then(()=>{
  console.log("connected data base");
})



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
