// This is middleware for validating data.
// It takes the plain objects, checks for errors, then calls the next func with the error details.
import { plainToClass } from "class-transformer";
import { validate, ValidationError } from "class-validator";
import * as express from "express";
import HttpException from "../exceptions/HttpException";

const ValidationMiddleware = <T>(type: any, skipMissingProperties = false): express.RequestHandler => {
   return (req, res, next) => {
    validate(plainToClass(type, req.body), { skipMissingProperties })
       .then((errors: ValidationError[]) => {
        if (errors.length > 0) {
            const message = errors.map((error: ValidationError) => Object.values(error.constraints)).join(", ");
            next(new HttpException(400, message));
        } else {
            next();
        }
       });
   };
};

export default ValidationMiddleware;
