import * as expect from 'expect';
import * as request from 'supertest';
import app from '../app';
import * as dotenv from 'dotenv';
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

describe('Server', () => {
  it('should go to return api details on the root route', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect((res) => {
        expect(res.body.api).toBe('api version 1');
      })
      .end(done);
  });
});
