"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addAnswer = exports.save = exports.get = exports.getAll = void 0;
const questions = [];
const getAll = () => Promise.resolve(questions);
exports.getAll = getAll;
const get = (id) => {
    const question = questions.find(x => x.id == id);
    if (question) {
        return Promise.resolve(question);
    }
    return Promise.reject('No question with that id exist');
};
exports.get = get;
const save = (question) => {
    const id = questions.length + 1;
    const answers = [];
    const savedQuestion = {
        id,
        text: question,
        answers
    };
    questions.push(savedQuestion);
    return Promise.resolve(savedQuestion);
};
exports.save = save;
const addAnswer = (questionId, answer) => {
    return exports.get(questionId).then((question) => {
        if (question) {
            const savedAnswer = {
                id: question.answers.length + 1,
                answer,
            };
            question.answers.push(savedAnswer);
            const index = questions.findIndex(x => x.id == questionId);
            questions.splice(index, 1, question);
            return Promise.resolve(savedAnswer);
        }
        return Promise.reject(`no question with id ${questionId} was found`);
    });
};
exports.addAnswer = addAnswer;
//# sourceMappingURL=questions.js.map