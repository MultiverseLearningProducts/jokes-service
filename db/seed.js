const {sequelize} = require('./db');
const {Joke} = require('./');
const jokes = require('./seedData');

const seed = async () => {
  await sequelize.sync({ force: true }); // recreate db
  await Joke.bulkCreate(jokes);
};

seed()
  .then(() => {
    console.log('Seeding success. Laughs on!');
  })
  .catch(err => {
    console.error(err);
  })
  .finally(() => {
    sequelize.close();
  });
