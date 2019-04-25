var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// var Spider = require('./routes/spider');

var app = express();
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization,\'Origin\',Accept,X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('X-Powered-By', ' 3.2.1');
  // res.header('Content-Type', ' 3.2.1');
  res.header('Content-Type', 'application/json;charset=utf-8');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
// app.use('/api/search', Spider);
// app.use('/spider', Spider);
app.server = app.listen(8000, () => {
  console.log(`server running....`)
});
app.get('/api/search',require('./routes/spider'));
app.get('/api/personalized',require('./routes/personalized'));
app.get('/api/personalized/newsong',require('./routes/personalized_newSong'));
app.get('/api/search/hot',require('./routes/search_hot'));
app.get('/api/top/list',require('./routes/top_list'));
app.get('/api/song/detail',require('./routes/song_detail'));
app.get('/api/lyric',require('./routes/lyric'));
app.get('/simi/playlist',require('./routes/simi_playlists'));
// console.log('app start success port:3000')
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
