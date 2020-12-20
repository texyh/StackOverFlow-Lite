"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Question_1 = require("../src/models/Question");
const db_1 = require("../db");
const uuid_1 = require("uuid");
const request = require("supertest");
const app_1 = require("../app");
const chai_1 = require("chai");
let connection;
let question;
let answer;
let repository;
let answerRepository;
before(() => __awaiter(void 0, void 0, void 0, function* () {
    connection = yield db_1.default(false, "answers");
    repository = connection.getRepository(Question_1.Question);
    answerRepository = connection.getRepository(Question_1.Answer);
}));
after(() => __awaiter(void 0, void 0, void 0, function* () {
    yield (connection === null || connection === void 0 ? void 0 : connection.close());
}));
beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
    question = new Question_1.Question();
    question.id = uuid_1.v4();
    question.text = "how do you split a string in javascript?";
    answer = new Question_1.Answer();
    answer.id = uuid_1.v4();
    answer.text = uuid_1.v4();
    answer.text = ".split(''), example: joe.split('')";
    answer.question = question;
    yield repository.save(question);
    yield answerRepository.save(answer);
}));
afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
    //   await repository.softDelete(question);
    //   await answerRepository.softDelete(answer);
}));
describe("Answer route", () => {
    it('should save answer', (done) => {
        request(app_1.default)
            .post(`/questions/${question.id}/answers`)
            .send({ answer: "how do you split a string in javascript?" })
            .expect(201)
            .expect((res) => {
            chai_1.expect(res.body.id).to.not.be.empty;
            chai_1.expect(uuid_1.validate(res.body.id)).to.be.true;
        })
            .end(done);
    });
    it('should mark answer as correct', (done) => {
        request(app_1.default)
            .put(`/questions/${question.id}/answers/${answer.id}/mark-correct`)
            .send()
            .expect(200)
            .expect((res) => __awaiter(void 0, void 0, void 0, function* () {
            const ans = yield answerRepository.findOne(answer.id);
            chai_1.expect(ans === null || ans === void 0 ? void 0 : ans.isCorrect).to.be.true;
        }))
            .end(done);
    });
});
//# sourceMappingURL=answers.test.js.map