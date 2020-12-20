export declare class AnswerService {
    markAnswerCorrect: (questionId: string, answerId: string) => Promise<void>;
    saveAnswer: (text: string, questionId: string) => Promise<string>;
}
