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
exports.markAnswerCorrect = exports.saveAnswer = void 0;
const service_1 = require("./service");
const saveAnswer = (questionId, answer) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const answerService = new service_1.AnswerService();
        const id = yield answerService.saveAnswer(answer, questionId);
        return Promise.resolve(id);
    }
    catch (error) {
        return Promise.reject(error);
    }
});
exports.saveAnswer = saveAnswer;
const markAnswerCorrect = (questionId, answerId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const answerService = new service_1.AnswerService();
        yield answerService.markAnswerCorrect(questionId, answerId);
    }
    catch (error) {
    }
});
exports.markAnswerCorrect = markAnswerCorrect;
//# sourceMappingURL=controllers.js.map