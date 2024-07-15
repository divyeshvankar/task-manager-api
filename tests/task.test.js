// tests/task.test.js
const request = require('supertest');
const app = require('../src/index');
const sequelize = require('../models');

beforeAll(async () => {
    await sequelize.sync();
});

afterAll(async () => {
    await sequelize.close();
});

describe('Task API', () => {
    it('should create a task', async () => {
        const res = await request(app)
            .post('/api/tasks')
            .send({
                title: 'Test Task',
                status: 'pending',
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('id');
    });
});
