const express = require('express');
const app = express();
const { Joke } = require('./db');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/jokes', async (req, res, next) => {
  try {
    // TODO - filter the jokes by tags and content
    const jokes = await Joke.findAll();
    res.send(jokes);
  } catch (error) {
    next(error)
  }
});

// we export the app, not listening in here, so that we can run tests
module.exports = app;
