import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateMediaUseCase } from './createMediaUseCase';

class CreateMediaController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { med_description, med_image, med_link, med_title, med_type } =
			request.body;

		const createMediaUseCase = container.resolve(CreateMediaUseCase);

		const createMedia = await createMediaUseCase.execute({
			med_description,
			med_image,
			med_link,
			med_title,
			med_type,
		});

		return response.send(createMedia);
	}
}

export { CreateMediaController };
