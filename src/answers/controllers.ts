import { AnswerService } from "./service";

export const saveAnswer = async (questionId: string, answer: string): Promise<string> => {
    try {
      const answerService = new AnswerService();
      const id = await answerService.saveAnswer(answer, questionId);
      return Promise.resolve(id);
    } catch (error) {
      return Promise.reject(error);
    } 
  };

export const markAnswerCorrect = async(questionId: string , answerId: string) :Promise<void> => {
  try {
    const answerService = new AnswerService();
    await answerService.markAnswerCorrect(questionId, answerId);
  } catch (error) {
    
  }
}
  