import { IAnswer, IQuestion } from '../models/question';
export declare const getAll: () => Promise<IQuestion[]>;
export declare const get: (id: number) => Promise<IQuestion>;
export declare const save: (question: string) => Promise<IQuestion>;
export declare const addAnswer: (questionId: number, answer: string) => Promise<IAnswer>;
