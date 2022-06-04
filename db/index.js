const {Joke} = require('./Joke');
const {sequelize, Sequelize} = require('./db');

module.exports = {
    Joke,
    sequelize,
    Sequelize
};
