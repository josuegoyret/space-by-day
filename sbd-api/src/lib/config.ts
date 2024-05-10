import dotenv from 'dotenv';
import { Dialect } from 'sequelize';
dotenv.config();

interface DatabaseConfig {
	username: string;
	password: string;
	host: string;
	database: string;
	port: number;
	dialect: Dialect;
}

export const serverConfig = {
	dev: process.env.NODE_ENV !== 'production',
	port: process.env.PORT || 3001,
	host: process.env.HOST || 'localhost',
	cors: process.env.CORS || '*',
};

export const databaseConfig: DatabaseConfig = {
	username: process.env.DB_USER || '',
	password: process.env.DB_PASSWORD || '',
	host: process.env.DB_HOST || '3001',
	database: process.env.DB_NAME || '',
	port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
	dialect: 'postgres',
};

const enviromentData = {
	local: {
		api: 'http://localhost:3001/api/v1',
		client: 'http://localhost:3000',
	},
	production: {
		api: 'https://api.spacebyday.com/api/v1',
		client: 'https://spacebyday.vercel.app',
	},
};

export const enum nodeEnvs {
	local = 'local',
	production = 'production',
}

export const CUSTOM_NODE_ENV: nodeEnvs = (process.env.NODE_ENV || 'local') as nodeEnvs;
export const API_URL = enviromentData[CUSTOM_NODE_ENV].api;
export const CLIENT_URL = enviromentData[CUSTOM_NODE_ENV].client;
