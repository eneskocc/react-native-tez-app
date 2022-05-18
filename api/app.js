const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose=require('mongoose');
const bodyParser = require('body-parser');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/sattim-gitti',{
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        family: 4,
      }).then(() => {
        console.log('bağlantı başarılı');
      }).catch((err) => {
        console.log(err);
});

const indexRouter = require('./routes/index');
const homeRouter = require('./routes/home');
const teklifRouter = require('./routes/teklif');
const tekliflerRouter = require('./routes/teklifler');
const movieRouter = require('./routes/movie');
const directorRouter = require('./routes/director');

const app = express();

const config = require('./config');
app.set('api_secret_key',config.api_secret_key);

const verifyToken = require('./middleware/verify-token');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', verifyToken);
app.use('/api/movie', movieRouter);
app.use('/api/home', homeRouter);
app.use('/api/teklif', teklifRouter);
app.use('/api/teklifler', tekliflerRouter);
app.use('/api/director', directorRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) =>{
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({error:{message:err.message,code:err.code}});
});

module.exports = app;
