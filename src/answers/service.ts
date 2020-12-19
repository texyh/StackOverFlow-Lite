import { Answer } from "../models/Answer";
import {getRepository} from 'typeorm';
import { Question } from "../models/Question";
import { v4 as uuidv4 } from 'uuid';

const answerRepository = () => getRepository(Answer);
const questionRepository = () => getRepository(Question);
export class AnswerService {

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