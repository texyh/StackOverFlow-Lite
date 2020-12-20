
import {Question} from '../models/Question';
import { QuestionService } from './service';

export const getAll = async (): Promise<Question[]> => {
  try {
    const questionService = new QuestionService();
    const questions = questionService.getAllQuestions()
    return Promise.resolve(questions)
  } catch (error) {
    return Promise.reject(error)
  }
}

export const get = async (id: string): Promise<Question> => {

  try {
    const questionService = new QuestionService();
    const question = await questionService.getQuestionById(id);
    if (question) {
      return Promise.resolve(question);
    }
  
    return Promise.reject('No question with that id exist');
  } catch (error) {
    return Promise.reject(error);
  }
};

export const save = async (question: string): Promise<string | null> => {
  try {
    const questionService = new QuestionService();
    const id = await questionService.saveQuestion(question);
    return Promise.resolve(id);

  } catch (error) {
    return Promise.resolve(error);
  }
};


