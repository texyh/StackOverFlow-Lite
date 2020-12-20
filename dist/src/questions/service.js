

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
exports.QuestionService = void 0;
const typeorm_1 = require('typeorm');
const uuid_1 = require('uuid');
const Question_1 = require('../models/Question');

const questionRepository = () => typeorm_1.getRepository(Question_1.Question);
class QuestionService {
  constructor() {
    this.saveQuestion = text => __awaiter(this, void 0, void 0, function* () {
      try {
        const question = new Question_1.Question();
        question.text = text;
        question.id = uuid_1.v4();
        yield questionRepository().save(question);
        return Promise.resolve(question.id);
      } catch (error) {
        return Promise.reject(error.message);
      }
    });
    this.getAllQuestions = () => __awaiter(this, void 0, void 0, function* () {
      try {
        const questions = yield questionRepository().find();
        return Promise.resolve(questions);
      } catch (error) {
        return Promise.reject(error.message);
      }
    });
    this.getQuestionById = id => __awaiter(this, void 0, void 0, function* () {
      try {
        const question = yield questionRepository().findOne({ id });
        return Promise.resolve(question);
      } catch (error) {
        return Promise.reject(error.message);
      }
    });
  }
}
exports.QuestionService = QuestionService;
// # sourceMappingURL=service.js.map
