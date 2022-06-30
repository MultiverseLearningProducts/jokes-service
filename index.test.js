const app = require('./index');
const { sequelize, Joke } = require('./db');
const request = require('supertest');
const seed = require('./db/seedFn');
const seedData = require('./db/seedData');

describe('GET /jokes', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true }); // recreate db
        await seed();
    });

    it('should return a list of all jokes', async () => {
        const response = await request(app).get('/jokes');
        expect(response.status).toBe(200);
        expect(response.body).toHaveLength(seedData.length);
        expect(response.body[0]).toEqual(expect.objectContaining(seedData[0]));
    });

    it('should return a list of jokes, filtered by tag', async () => {
        const response = await request(app).get('/jokes?tags=anatomy');
        expect(response.status).toBe(200);
        expect(response.body).toHaveLength(3);
        expect(response.body[0]).toEqual(expect.objectContaining(seedData[3]));
    });

    it('should return a list of jokes, filtered by content', async () => {
        const response = await request(app).get('/jokes?content=flamingo');
        expect(response.status).toBe(200);
        expect(response.body).toHaveLength(1);
        expect(response.body[0]).toEqual(expect.objectContaining(seedData[2]));
    });
});
