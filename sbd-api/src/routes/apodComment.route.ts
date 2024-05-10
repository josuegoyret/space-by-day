import { Router } from 'express';
import apodCommentController from '../controllers/apodComment.controller';

const apodCommentRouter = Router();

apodCommentRouter.get(`/:apodDate`, apodCommentController.getAll);
apodCommentRouter.post(`/`, apodCommentController.create);

export default apodCommentRouter;
