const expect = require('expect');
const request = require('supertest');
const {app} = require('../server');

describe('Server', () => {
    it('should go to return message from home route', (done) => {
        request(app)
            .get('/')
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe('deployed from travis from github');
            })
            .end(done);
    })

    it('should return true', () => {
        expect(true).toBeTruthy();
    })
})