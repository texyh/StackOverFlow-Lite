import {getRepository} from 'typeorm';
import { Question } from "../models/Question";
import { Answer } from "../models/Answer";
import { v4 as uuidv4 } from 'uuid';

const answerRepository = () => getRepository(Answer);
const questionRepository = () => getRepository(Question);
export class AnswerService {

    markAnswerCorrect  = async (questionId: string, answerId: string) => {
        try {
            const answer = await answerRepository().findOne(answerId);
            if(!answer) {
                return Promise.reject("No answer with that id exists");
            }

            answer.isCorrect = true;
            await answerRepository().save(answer);
            return Promise.resolve()
        } catch (error) {
            return Promise.reject(error)
        }
    }

    saveAnswer  = async (text:string, questionId: string) : Promise<string> => {
        try {
            const question: any = await questionRepository().findOne(questionId);
            if(!question) {
                const error = new Error()
                error.message = "Invalid questionId"
                Promise.reject(error);
            }

            const answer = new Answer();
            answer.text = text;
            answer.id = uuidv4()
            answer.question = question;
            await answerRepository().save(answer)
            return Promise.resolve(answer.id);

        } catch (error) {
            return Promise.reject(error)
        }
    }
}