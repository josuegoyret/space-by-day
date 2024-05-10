import { Sequelize } from 'sequelize';
import { CUSTOM_NODE_ENV, databaseConfig, nodeEnvs } from './lib/config';

const sequelize =
	CUSTOM_NODE_ENV === nodeEnvs.local
		? new Sequelize(
				`${databaseConfig.dialect}://${databaseConfig.username}:${databaseConfig.password}@${databaseConfig.host}:${databaseConfig.port}/${databaseConfig.database}`,
				{ logging: false, native: false },
			)
		: new Sequelize(databaseConfig.database, databaseConfig.username, databaseConfig.password, {
				dialect: databaseConfig.dialect,
				host: databaseConfig.host,
				port: databaseConfig.port,
				pool: {
					max: 3,
					min: 1,
					idle: 10000,
				},
				dialectOptions: {
					ssl: {
						require: true,
						// Ref.: https://github.com/brianc/node-postgres/issues/2009
						rejectUnauthorized: false,
					},
					keepAlive: true,
				},
				ssl: true,
			});

// tables

export const conn = sequelize;
