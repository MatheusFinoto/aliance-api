import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import { AppError } from '../helper/errorHandler';
import { router } from '../routes';
import './container';

const app = express();

app.use(express.json());

app.use(router);

app.use(
	(err: Error, request: Request, response: Response, next: NextFunction) => {
		if (err instanceof AppError) {
			return response.status(err.statusCode).json({
				statusCode: err.statusCode,
				error: err.result,
				message: err.message,
			});
		}
		return response.status(500).json({
			statusCode: 500,
			error: err.message,
			message: `Internal server error - ${err.message}`,
		});
	}
);

export default app;
