
import * as expect from 'expect';
import * as request from 'supertest';
import app from '../app';

describe('Server', () => {
  it('should go to return api details on the root route', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect((res) => {
        expect(res.body.api).toBe('api version 1');
      })
      .end(done);
  })
});
