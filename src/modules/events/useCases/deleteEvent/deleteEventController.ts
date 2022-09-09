import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeleteEventUseCase } from './deleteEventUseCase';

class DeleteEventController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { eve_id } = request.params;

		const deleteEventUseCase = container.resolve(DeleteEventUseCase);

		const deleteEvent = await deleteEventUseCase.execute(eve_id);

		return response.send(deleteEvent);
	}
}

export { DeleteEventController };
