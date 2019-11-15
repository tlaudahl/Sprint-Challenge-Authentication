const request = require('supertest');

const server = require('../api/server');


describe('server', function() {
    describe('GET /api/jokes', function() {
        it('fails without token', async function() {
            const user = { username: 'travis1' }
            await request(server)
            .get('/api/jokes')
            .then(res => {
                expect(res.status).toBe(400)
            });
        });

        it('works with token', async function() {
            const user = { password: 'travis1' }
            await request(server)
            .get('/api/jokes')
            .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRyYXZpcyIsImlhdCI6MTU3MzgzOTcxNSwiZXhwIjoxNTczOTI2MTE1fQ.FjQxrKD6tiGoPFj47etpeEJQN-SHR9-vj7e0ON9cbSc')
            .then(res => {
                expect(res.status).toBe(200)
            });
        });
    });
})