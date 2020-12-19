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
const db_1 = require("../db");
const Question_1 = require("../src/models/Question");
const request = require("supertest");
const typeorm_1 = require("typeorm");
const app_1 = require("../app");
const chai_1 = require("chai");
const uuid_1 = require("uuid");
let connection;
let question;
before(() => __awaiter(void 0, void 0, void 0, function* () {
    connection = yield db_1.default({ enableLogging: false });
}));
after(() => __awaiter(void 0, void 0, void 0, function* () {
    yield (connection === null || connection === void 0 ? void 0 : connection.close());
}));
beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
    const repository = typeorm_1.getRepository(Question_1.Question);
    question = new Question_1.Question();
    question.id = uuid_1.v4();
    question.text = "how do you split a string in javascript?";
    yield repository.save(question);
}));
afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
    const repository = typeorm_1.getRepository(Question_1.Question);
    yield repository.remove(question);
}));
describe('Question Route', () => {
    it("should save questions", (done) => {
        request(app_1.default)
            .post('/questions')
            .send({ question: "how do you split a string in javascript?" })
            .expect(201)
            .expect((res) => {
            chai_1.expect(res.body.id).to.not.be.empty;
            chai_1.expect(uuid_1.validate(res.body.id)).to.be.true;
        })
            .end(done);
    });
    it("should get all saved questions", () => __awaiter(void 0, void 0, void 0, function* () {
        yield request(app_1.default)
            .get("/questions")
            .expect(200)
            .expect((res) => {
            chai_1.expect(res.body.results.length).to.not.be.equal(0);
        });
    }));
    it("should get a question given the questionId", () => __awaiter(void 0, void 0, void 0, function* () {
        yield request(app_1.default)
            .get(`/questions/${question.id}`)
            .expect(200)
            .expect((res) => {
            chai_1.expect(res.body.results.text).to.be.equal("how do you split a string in javascript?");
        });
    }));
});
//# sourceMappingURL=questions.test.js.map