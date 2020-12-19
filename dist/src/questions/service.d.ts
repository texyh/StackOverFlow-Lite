import { Question } from '../models/Question';
export declare class QuestionService {
    saveQuestion: (text: any) => Promise<string | null>;
    getAllQuestions: () => Promise<Question[]>;
    getQuestionById: (id: string) => Promise<Question | any>;
}
