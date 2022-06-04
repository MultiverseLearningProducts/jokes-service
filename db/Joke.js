const {Sequelize, sequelize} = require('./db');

const Joke = sequelize.define('joke', {
  joke: Sequelize.STRING,
  tags: Sequelize.STRING
});

module.exports = { Joke };
