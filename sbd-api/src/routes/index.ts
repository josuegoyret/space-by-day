import { Router } from 'express';
import apodCommentRouter from './apodComment.route';

const router = Router();

router.use('/apod-comment', apodCommentRouter);

export default router;
