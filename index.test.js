const app = require('./index');
const { sequelize, Joke } = require('./db');
const request = require('supertest');

const mockedJokes = [
    {
        id: 2,
        joke: "What do you call a fly without wings? A walk.",
        tags: "animals,bugs"
    },
    {
        id: 3,
        joke: "When my wife told me to stop impersonating a flamingo, I had to put my foot down.",
        tags: "marriage,relationship"
    },
    {
        id: 4,
        joke: "What do you call someone with no nose? Nobody knows.",
        tags: "anatomy,biology"
    },
    {
        id: 5,
        joke: "What time did the man go to the dentist? Tooth hurt-y.",
        tags: "teeth,anatomy,doctor"
    }
]

jest.mock('./db', () => {
    return {
        Joke: {
            findAll: jest.fn(() => Promise.resolve(mockedJokes)),
        }
    }
});

describe('GET /jokes', () => {
    it('should return a list of all jokes', async () => {
        const response = await request(app).get('/jokes');
        expect(response.status).toBe(200);
        expect(response.body).toHaveLength(4);
        expect(response.body).toEqual(mockedJokes);
    });

    it('should return a list of jokes, filtered by tag', async () => {
        const response = await request(app).get('/jokes?tags=anatomy');
        expect(response.status).toBe(200);
        expect(response.body).toHaveLength(2);
        expect(response.body).toEqual([mockedJokes[2], mockedJokes[3]]);
    });

    it('should return a list of jokes, filtered by content', async () => {
        const response = await request(app).get('/jokes?content=flamingo');
        expect(response.status).toBe(200);
        expect(response.body).toHaveLength(1);
        expect(response.body).toEqual([mockedJokes[1]]);
    });
})