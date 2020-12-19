export declare class Question {
    id: string;
    text: string;
    answers: Answer[];
}
export declare class Answer {
    id: string;
    text: string;
    question: Question;
}
