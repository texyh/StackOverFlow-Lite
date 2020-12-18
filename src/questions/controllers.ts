
import {Question} from '../models/question';

const questions: Question[] = [];

export const getAll = (): Promise<Question[]> => Promise.resolve(questions);

export const get = (id: number): Promise<Question> => {
  const question = questions.find(x => x.id == id);
  if (question) {
    return Promise.resolve(question);
  }

  return Promise.reject('No question with that id exist');
};

export const save = (question: string): Promise<Question> => {
  const id = questions.length + 1;
  const answers: Question[] = [];
  const savedQuestion = {
    id,
    text: question,
    answers
  };

  questions.push(savedQuestion);
  return Promise.resolve(savedQuestion);
};


