import { Question } from '../models/Question';
export declare const getAll: () => Promise<Question[]>;
export declare const get: (id: string) => Promise<Question>;
export declare const save: (question: string) => Promise<string | null>;
