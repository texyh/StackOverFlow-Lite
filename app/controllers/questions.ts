
import {IAnswer, IQuestion} from '../models/question';

const questions: IQuestion[] = [];

export const getAll = (): Promise<IQuestion[]> => Promise.resolve(questions);

export const get = (id: number): Promise<IQuestion> => {
  const question = questions.find(x => x.id == id);
  if (question) {
    return Promise.resolve(question);
  }

  return Promise.reject('No question with that id exist');
};

export const save = (question: string): Promise<IQuestion> => {
  const id = questions.length + 1;
  const answers: IQuestion[] = [];
  const savedQuestion = {
    id,
    text: question,
    answers
  };

  questions.push(savedQuestion);
  return Promise.resolve(savedQuestion);
};

export const addAnswer = (questionId: number, answer: string): Promise<IAnswer> => {
  return get(questionId).then((question: IQuestion) => {
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

