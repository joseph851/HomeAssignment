require('./models/Product');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const authRoutes = require('./routes/api');

const mongoURL =
  'mongodb+srv://idan:idan@cluster0-tbsut.mongodb.net/test?retryWrites=true&w=majority';

//const localUrl = 'mongodb://localhost:zoom';

app.use(express.json());

app.use(authRoutes);

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useCreateIndex: true,
});

mongoose.connection.on('connected', () => {
  /*if coneection success*/
  console.log('Connected');
});

mongoose.connection.on('error', err => {
  /*if coneection faild*/
  console.erorr('error', err);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
