const questions = [];

const getAll = () => Promise.resolve(questions);

const get = (id) => {
  const question = questions.find(x => x.id == id);
  if (question) {
    return Promise.resolve(question);
  }

  return Promise.reject('No question with that id exist');
};

const save = (question) => {
  const id = questions.length + 1;
  const savedQuestion = {
    id,
    question,
    answers: [],
  };

  questions.push(savedQuestion);
  return Promise.resolve(savedQuestion);
};

const addAnswer = (questionId, answer) => get(questionId).then((question) => {
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

module.exports = {
  getAll,
  get,
  save,
  addAnswer,
};
