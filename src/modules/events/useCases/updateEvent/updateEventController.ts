import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateEventUseCase } from './updateEventUseCase';

class UpdateEventController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { eve_id } = request.params;

		const { eve_title, eve_image, eve_description, eve_date, eve_updated_by } =
			request.body;

		const updateEventUseCase = container.resolve(UpdateEventUseCase);

		const updateEvent = await updateEventUseCase.execute({
			eve_id,
			eve_title,
			eve_image,
			eve_description,
			eve_date,
			eve_updated_by,
		});

		return response.send(updateEvent);
	}
}

export { UpdateEventController };
