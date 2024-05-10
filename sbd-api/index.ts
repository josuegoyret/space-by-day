import app from './src/app';
import { serverConfig } from './src/lib/config';
import { conn } from './src/db';

conn
	.sync({ alter: true })
	.then(() => {
		console.log('Database connected!');
		app.listen(serverConfig.port, function () {
			console.log(`Server listening on port ${serverConfig.port}`);
		});
	})
	.catch((err: any) => console.log(err));
