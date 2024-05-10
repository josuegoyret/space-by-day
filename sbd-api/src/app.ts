import express, { ErrorRequestHandler, Request, Response, Application, NextFunction } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';
import routes from './routes/index';

import { serverConfig } from './lib/config';

const GLOBAL_PREFIX = '/api/v1/';

const app: Application = express();

app.use(express.urlencoded({ extended: true, limit: '50mb' })); //middleware
app.use(express.json({ limit: '50mb' }));
app.use(cookieParser());
app.use(morgan('dev'));
app.use(
	cors({
		origin: serverConfig.cors,
		credentials: true,
	}),
);

const errorHanlder: ErrorRequestHandler = (
	err: any,
	req: Request,
	res: Response,
	// eslint-disable-next-line
	next: NextFunction,
) => {
	const status = err.status || 500;
	const message = err.message || err;
	console.error(err);
	res.status(status).send(message);
};

app.use(errorHanlder);

app.use(`${GLOBAL_PREFIX}`, routes);

export default app;
