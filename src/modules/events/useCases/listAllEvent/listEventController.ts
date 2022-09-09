import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListEventUseCase } from './listEventUseCase';

class ListEventController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { page, limit } = request.query as unknown as {
			page: number;
			limit: number;
		};

		const listEventUseCase = container.resolve(ListEventUseCase);
		const listEvent = await listEventUseCase.execute({
			page: Number(page),
			limit: Number(limit),
		});

		return response.send(listEvent);
	}
}

export { ListEventController };
