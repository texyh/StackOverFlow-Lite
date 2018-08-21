
import expect from 'expect';
import request from 'supertest';

describe('Server', () => {
  // it('should go to return message from home route', (done) => {
  //     request(app)
  //         .get('/')
  //         .expect(200)
  //         .expect((res) => {
  //             expect(res.body.text).toBe('deployed from travis from github');
  //         })
  //         .end(done);
  // })

  it('should return true', () => {
    expect(true).toBeTruthy();
  });

  it('should be false', () => {
    expect(false).toBeFalsy();
  });

});
