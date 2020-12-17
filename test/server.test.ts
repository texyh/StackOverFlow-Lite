
import * as expect from 'expect';
import * as request from 'supertest';
import app from '../app';

// const expect  = require('expect');
// const request  = require('supertest');
// const app =  require('../app');

//process.NODE_ENV = 'test';


beforeEach(() => {
  request(app).post('/questions')
    .send({ question: "sup?" })
})

afterEach(() => {
  console.log("after each")
})

describe('Server', () => {
  // it('should go to return message from home route', (done) => {
  //   request(app)
  //     .get('/')
  //     .expect(200)
  //     .expect((res) => {
  //       expect(res.body.text).toBe('deployed from travis from github');
  //     })
  //     .end(done);
  // })

  it("should save questions", (done) => {
    request(app)
      .post('/questions')
      .send({ question: "sup?" })
      .expect(201)
      .expect((res) => {
        expect(res.body.results.text).toBe("sup?")
      })
      .end(done);
  })

  it("should get saved questions", async () => {
    await request(app)
      .get("/questions")
      .expect(200)
      .expect((res) => {
        expect(res.body.results.length).toBe(1)
        expect(res.body.results[0].text).toBe("sup?")
      })
  })

  it('should return true', () => {
    expect(true).toBeTruthy();
  });

  it('should be false', () => {
    expect(false).toBeFalsy();
  });

});
