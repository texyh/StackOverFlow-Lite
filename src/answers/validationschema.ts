import * as Joi from "joi"

export const markCorrect = Joi.object({
    questionId: Joi.string().uuid().required(),
    answerId: Joi.string().uuid().required(),
});

export const saveAnswer = Joi.object({questionId: Joi.string().uuid().required()})