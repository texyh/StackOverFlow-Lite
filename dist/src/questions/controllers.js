

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
exports.save = exports.get = exports.getAll = void 0;
const service_1 = require('./service');

const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
  try {
    const questionService = new service_1.QuestionService();
    const questions = questionService.getAllQuestions();
    return Promise.resolve(questions);
  } catch (error) {
    return Promise.reject(error);
  }
});
exports.getAll = getAll;
const get = id => __awaiter(void 0, void 0, void 0, function* () {
  try {
    const questionService = new service_1.QuestionService();
    const question = yield questionService.getQuestionById(id);
    if (question) {
      return Promise.resolve(question);
    }
    return Promise.reject('No question with that id exist');
  } catch (error) {
    return Promise.reject(error);
  }
});
exports.get = get;
const save = question => __awaiter(void 0, void 0, void 0, function* () {
  try {
    const questionService = new service_1.QuestionService();
    const id = yield questionService.saveQuestion(question);
    return Promise.resolve(id);
  } catch (error) {
    return Promise.resolve(error);
  }
});
exports.save = save;
// # sourceMappingURL=controllers.js.map
