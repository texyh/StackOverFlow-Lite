import { Answer } from "src/models/Answer";
import { Question } from "src/models/question";
const questions: Question[] = [];


export const addAnswer = (questionId: number, answer: string): Promise<Answer> => {
    const question = questions.find(x => x.id == questionId);
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
  };
  