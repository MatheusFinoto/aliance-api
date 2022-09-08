import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateEventUseCase } from './createEventUseCase';

class CreateEventController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { eve_title, eve_image, eve_description, eve_date, eve_created_by } =
			request.body;

		const createEventUseCase = container.resolve(CreateEventUseCase);
		const createEvent = await createEventUseCase.execute({
			eve_title,
			eve_image,
			eve_description,
			eve_date,
			eve_created_by,
		});
		return response.send(createEvent);
	}
}

export { CreateEventController };
