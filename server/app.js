var createError = require('http-errors');
var express = require('express');
var path = require('path');
const cors = require('cors');
const bcrypt = require('bcryptjs');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const User = require('./models/user.model');

const jwt = require('jsonwebtoken');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
// MongoDB Key
const db = require("./keys/key").mongoURI;

// view engine setup
// MongoDB Connect
mongoose.connect(db)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors())
app.use(express.json())

app.post('/api/register', async (req, res) => {
  console.log(req.body)
  try {
    const newPassword = await bcrypt.hash(req.body.password, 10)
    await User.create({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: newPassword,
    })
    res.json({ status: 'ok' })
  } catch (err) {
    console.log(err);
    res.json({ status: 'error', error: 'Duplicate email/username' })
  }
})

app.post('/api/login', async (req, res) => {
  const user = await User.findOne({
    username: req.body.username,
  })

  if (!user) {
    return { status: 'error', error: 'Invalid login username' }
  }

  const isPasswordValid = await bcrypt.compare(
    req.body.password,
    user.password
  )

  if (isPasswordValid) {
    const token = jwt.sign(
      {
        username: user.username,
        email: user.email,
      },
      'secret123'
    )

    return res.json({ status: 'ok', user: token })
  } else {
    return res.json({ status: 'error', user: false })
  }
})

app.get('/api/data', async (req, res) => {
  const token = req.headers['x-access-token']

  try {
    const decoded = jwt.verify(token, 'secret123')
    const username = decoded.username
    const user = await User.findOne({ username: username })

    return res.json({ status: 'ok', quote: user.name })
  } catch (error) {
    console.log(error)
    res.json({ status: 'error', error: 'invalid token' })
  }
})

// app.post('/api/quote', async (req, res) => {
//   const token = req.headers['x-access-token']

//   try {
//     const decoded = jwt.verify(token, 'secret123')
//     const email = decoded.email
//     await User.updateOne(
//       { email: email },
//       { $set: { quote: req.body.quote } }
//     )

//     return res.json({ status: 'ok' })
//   } catch (error) {
//     console.log(error)
//     res.json({ status: 'error', error: 'invalid token' })
//   }
// })

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
