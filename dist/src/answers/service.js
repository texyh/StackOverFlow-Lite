

const __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(((resolve) => { resolve(value); })); }
  return new (P || (P = Promise))(((resolve, reject) => {
    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
    function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  }));
};
Object.defineProperty(exports, '__esModule', { value: true });
exports.AnswerService = void 0;
const typeorm_1 = require('typeorm');
const uuid_1 = require('uuid');
const Question_1 = require('../models/Question');

const answerRepository = () => typeorm_1.getRepository(Question_1.Answer);
const questionRepository = () => typeorm_1.getRepository(Question_1.Question);
class AnswerService {
  constructor() {
    this.saveAnswer = (text, questionId) => __awaiter(this, void 0, void 0, function* () {
      try {
        const question = yield questionRepository().findOne(questionId);
        if (!question) {
          const error = new Error();
          error.message = 'Invalid questionId';
          Promise.reject(error);
        }
        const answer = new Question_1.Answer();
        answer.text = text;
        answer.id = uuid_1.v4();
        answer.question = question;
        yield answerRepository().save(answer);
        return Promise.resolve(answer.id);
      } catch (error) {
        return Promise.reject(error);
      }
    });
  }
}
exports.AnswerService = AnswerService;
// # sourceMappingURL=service.js.map
