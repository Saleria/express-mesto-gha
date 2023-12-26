const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/mestodb');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/users', require('./routes/user'));
app.use('/cards', require('./routes/card'));

app.use((req, res, next) => {
  req.user = {
    _id: '658b304dcb44272116977fd7',
  };

  next();
});

app.listen(PORT, () => {
  console.log(`Server listenin on port ${PORT}`);
});
