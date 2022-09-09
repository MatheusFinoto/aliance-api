import { Request, Response } from 'express';
import { UpdateMediaUseCase } from './updateMediaUseCase';
import { container } from 'tsyringe';

class UpdateMediaController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { med_id } = request.params;
		const { med_description, med_image, med_link, med_title, med_type } =
			request.body;

		const updateMediaUseCase = container.resolve(UpdateMediaUseCase);

		const updateMedia = await updateMediaUseCase.execute({
			med_id,
			med_description,
			med_image,
			med_link,
			med_title,
			med_type,
		});

		return response.send(updateMedia);
	}
}

export { UpdateMediaController };
