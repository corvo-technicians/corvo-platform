const express = require('express');
const app = require('./app');
const mongoose = require('mongoose');

let db = require('./config/keys').mongoUri;
mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true });
db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('mongoDB connetted');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(
    `CORVO | Server started on port ${PORT} - use 'localhost:/${PORT}'`
  );
});
