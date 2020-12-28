import { NextFunction, Request, Response } from "express";
import  * as Joi from "joi";
import { ValidationError } from "./validationError";


export const validateRequestParams = (schema: Joi.Schema) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        const value = req.params;
        await validate(schema, value);
        await next()
    } catch (error) {
        const validationError = error as ValidationError
        return res.status(400).send({
            error: validationError.error,
            status: validationError.message,
        })
    }
}

export const validateRequestBody = (schema: Joi.Schema) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        const value = req.body;
        await validate(schema, value);
        await next()
    } catch (error) {
        const validationError = error as ValidationError
        return res.status(400).send({
            error: validationError.error,
            status: validationError.message,
        })
    }
}

export const validate = async (schema: Joi.Schema, value) => {
    try {
        await Joi.assert(value, schema)
    } catch (error) {
        const errors = error.details as Joi.ValidationErrorItem[];
        const details = errors.map((err: any) => ({
            key: err.context.key,
            message: err.message,
        }));

        throw new ValidationError('invalid request', details)
    }
}
