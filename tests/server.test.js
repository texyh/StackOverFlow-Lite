const expect = require('expect');
const request = require('supertest');
const {app} = require('../server');

describe('Server', () => {
    it('should go to return message from home route', (done) => {
        request(app)
            .get('/')
            .expect(200)
            .end(done);
    })
})