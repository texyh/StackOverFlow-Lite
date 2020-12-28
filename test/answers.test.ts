import { Question } from '../src/models/Question';
import { Answer } from '../src/models/Answer';
import { Connection, Repository } from 'typeorm';
import dbConnection from '../db';
import { v4 as uuidv4, validate as uuidValidate } from 'uuid';
import * as request from 'supertest';
import app from '../app';
import { expect } from 'chai';

let connection: Connection;
let question: Question;
let answer: Answer;
let repository: Repository<Question>;
let answerRepository: Repository<Answer>;

before(async () => {
  connection = await dbConnection(false, 'answers');
  repository = connection.getRepository(Question);
  answerRepository = connection.getRepository(Answer);
});

after(async () => {
  await connection?.close();
});

beforeEach(async () => {
  question = new Question();
  question.id = uuidv4();
  question.text = 'how do you split a string in javascript?';

  answer = new Answer();
  answer.id = uuidv4();
  answer.text = uuidv4();
  answer.text = ".split(''), example: joe.split('')";
  answer.question = question;

  await repository.save(question);
  await answerRepository.save(answer);
});

afterEach(async () => {
  //   await repository.softDelete(question);
  //   await answerRepository.softDelete(answer);
});

describe('Answer route', () => {
  it('should save answer', (done) => {
    request(app)
      .post(`/questions/${question.id}/answers`)
      .send({ answer: 'how do you split a string in javascript?' })
      .expect(201)
      .expect((res) => {
        expect(res.body.id).to.not.be.empty;
        expect(uuidValidate(res.body.id)).to.be.true;
      })
      .end(done);
  });

  it('should mark answer as correct', (done) => {
    request(app)
      .put(`/questions/${question.id}/answers/${answer.id}/mark-correct`)
      .send()
      .expect(200)
      .expect(async (res) => {
        console.log(res.body);
        const ans = await answerRepository.findOne(answer.id);
        expect(ans?.isCorrect).to.be.true;
      })
      .end(done);
  });

  it('should mark answer as correct', (done) => {
    request(app)
      .put(`/questions/${question.id}/answers/${answer.id}/mark-correct`)
      .send()
      .expect(200)
      .expect(async (res) => {
        const ans = await answerRepository.findOne(answer.id);
        expect(ans?.isCorrect).to.be.true;
      })
      .end(done);
  });
});
