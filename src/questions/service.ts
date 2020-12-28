import { Question } from '../models/Question';
import { getRepository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
const questionRepository = () => getRepository(Question);

export class QuestionService {
  saveQuestion = async (text): Promise<string | null> => {
    try {
      const question = new Question();
      question.text = text;
      question.id = uuidv4();

      await questionRepository().save(question);
      return Promise.resolve(question.id);
    } catch (error) {
      return Promise.reject(error.message);
    }
  };

  getAllQuestions = async (): Promise<Question[]> => {
    try {
      const questions = await questionRepository().find();

      return Promise.resolve(questions);
    } catch (error) {
      return Promise.reject(error.message);
    }
  };

  getQuestionById = async (id: string): Promise<Question | any> => {
    try {
      const question = await questionRepository().findOne({ id: id });
      return Promise.resolve(question);
    } catch (error) {
      return Promise.reject(error.message);
    }
  };
}
