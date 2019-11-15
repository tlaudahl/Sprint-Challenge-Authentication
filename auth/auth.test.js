const request = require('supertest');

const server = require('../api/server');


describe('server', function() {
    describe('POST /api/auth/register', function() {
        it('fails without password', async function() {
            const user = { username: 'travis1' }
            await request(server)
            .post('/api/auth/register')
            .send(user)
            .then(res => {
                expect(res.status).toBe(400)
            });
        });

        it('fails without username', async function() {
            const user = { password: 'travis1' }
            await request(server)
            .post('/api/auth/register')
            .send(user)
            .then(res => {
                expect(res.status).toBe(400)
            });
        });
    });
    describe('POST /api/auth/login', function() {
        it('fails with wrong password', async function() {
            const user = { username: 'travis', password: 'TRAVIS'}
            await request(server)
            .post('/api/auth/login')
            .send(user)
            .then(res => {
                expect(res.status).toBe(401)
            })
        });
        it('fails with username not in database', async function() {
            const user = { username: 'TRAVIS', password: 'travis'}
            await request(server)
            .post('/api/auth/login')
            .send(user)
            .then(res => {
                expect(res.status).toBe(401)
            })
        });
    });
})