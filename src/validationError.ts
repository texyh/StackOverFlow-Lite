import { any, extend } from 'joi';

export class ValidationError extends Error {
  message: string;
  error: any[];
  constructor(message: string, error: any[]) {
    super(message);
    this.message = message;
    this.error = error;
    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace(this);
  }
}
