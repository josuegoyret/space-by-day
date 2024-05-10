import { Request, Response, Router } from 'express';

const router = Router();

router.use('/', async (req: Request, res: Response) => {
	try {
		return res.status(200).send('Hello there.- owk');
	} catch (error: any) {
		return res.status(error.status || 500).send(error.message || 'Error while getting salutation');
	}
});

export default router;
