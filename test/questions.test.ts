
import * as expect from 'expect';
import * as request from 'supertest';
import app from '../app';

beforeEach(() => {
  request(app).post('/questions')
    .send({ question: "how do you split a string in javascript?" })
})

describe('Question Route', () => {
  
  it("should save questions", (done) => {
    request(app)
      .post('/questions')
      .send({ question: "how do you split a string in javascript?" })
      .expect(201)
      .expect((res) => {
        expect(res.body.results.text).toBe("how do you split a string in javascript?")
      })
      .end(done);
  })

  it("should get all saved questions", async () => {
    await request(app)
      .get("/questions")
      .expect(200)
      .expect((res) => {
        expect(res.body.results.length).toBe(1)
        expect(res.body.results[0].text).toBe("how do you split a string in javascript?")
      })
  })

  it("should get a question given the questionId", async () => {
      await request(app)
            .get('/questions/1')
            .expect(200)
            .expect((res) => {
                expect(res.body.results.text).toBe("how do you split a string in javascript?")
            })
  })

});
