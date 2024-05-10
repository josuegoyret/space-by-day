import { APODCommentModel } from '../models/APODComment.model';
import { Request, Response } from 'express';
import apodCommentService from '../services/apodComment.service';

type GetAPODCommentsParams = {
	apodDate: string;
};

type CreateAPODCommentBody = {
	content: string;
	apodDate: string;
};

class APODCommentController {
	service: typeof apodCommentService;

	constructor(service: typeof apodCommentService) {
		this.service = service;
	}
	getAll = async (req: Request<GetAPODCommentsParams, object, CreateAPODCommentBody>, res: Response) => {
		try {
			const { apodDate } = req.params;
			const apodComments = await this.service.getAll({ apodDate });
			return res.status(200).send({
				success: true,
				message: 'APOD Comments successfully retrieved',
				apodComments,
			});
		} catch (error: any) {
			return res
				.status(error.status || 500)
				.send({ success: false, message: error.message || 'Error while retrieving APOD Comments' });
		}
	};
	create = async (req: Request<object, object, CreateAPODCommentBody>, res: Response) => {
		try {
			const { content, apodDate } = req.body;
			const apodComment = await this.service.create({ content, apodDate });
			return res.status(200).send({
				success: true,
				message: 'Plan creado exitosamente',
				apodComment,
			});
		} catch (error: any) {
			return res.status(error.status || 500).send({
				success: false,
				message: error.message || 'Error al crear el plan',
			});
		}
	};
}

const apodCommentController = new APODCommentController(apodCommentService);

export default apodCommentController;
