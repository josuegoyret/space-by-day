import { APODCommentModel } from '../models/APODComment.model';
import { APODComment } from '../db';

class APODCommentService {
	model: typeof APODComment;

	constructor(model: typeof APODComment) {
		this.model = model;
	}
	getAll = async ({ apodDate }: { apodDate: string }): Promise<APODCommentModel[]> => {
		const apodComments = await this.model.findAll({
			where: { apodDate },
		});
		return apodComments;
	};
	create = async ({ apodDate, content }: { apodDate: string; content: string }): Promise<APODCommentModel> => {
		const apodComment = await this.model.create({ apodDate, content });
		return apodComment;
	};
}

const apodCommentService = new APODCommentService(APODComment);

export default apodCommentService;
