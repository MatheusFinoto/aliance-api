import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListAllMediaUseCase } from './listAllMediaUseCase';

class ListAllMediaController {
	async handle(request: Request, response: Response): Promise<Response> {
		const listAllMediaUseCase = container.resolve(ListAllMediaUseCase);

		const listMedia = await listAllMediaUseCase.execute();

		return response.send(listMedia);
	}
}

export { ListAllMediaController };
