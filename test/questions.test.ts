
import dbConnection from '../db';
import { Question } from '@src/models/Question';
import * as request from 'supertest';
import { Connection, getRepository } from 'typeorm';
import app from '../app';
import {expect} from 'chai';
import { v4 as uuidv4, validate as uuidValidate } from 'uuid';
import 'module-alias/register';

let connection: Connection;
let question: Question;

before(async () => {
  connection = await dbConnection({enableLogging: false});
})

after(async () => {
  await connection?.close();
});

beforeEach( async () => {
  const repository = getRepository(Question)
  question = new Question();
  question.id = uuidv4();
  question.text = "how do you split a string in javascript?";
  await repository.save(question);
})

afterEach( async () => {
  const repository = getRepository(Question)
  await repository.remove(question);
})

describe('Question Route', () => {
  
  it("should save questions", (done) => {
    request(app)
      .post('/questions')
      .send({ question: "how do you split a string in javascript?" })
      .expect(201)
      .expect((res) => {
        expect(res.body.id).to.not.be.empty
        expect(uuidValidate(res.body.id)).to.be.true
      })
      .end(done);
  })

  it("should get all saved questions", async () => {
    await request(app)
      .get("/questions")
      .expect(200)
      .expect((res) => {
        expect(res.body.results.length).to.not.be.equal(0)
      })
  })

  it("should get a question given the questionId", async () => {
      await request(app)
            .get(`/questions/${question.id}`)
            .expect(200)
            .expect((res) => {
                expect(res.body.results.text).to.be.equal("how do you split a string in javascript?")
            })
  })

});
