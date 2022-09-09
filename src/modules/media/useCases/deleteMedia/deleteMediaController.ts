import { DeleteMediaUseCase } from './deleteMediaUseCase';
import { container } from 'tsyringe';
import { Request, Response } from 'express';

class DeleteMediaController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { med_id } = request.params;

		const deleteMediaUseCase = container.resolve(DeleteMediaUseCase);

		const deleteMedia = await deleteMediaUseCase.execute(med_id);

		return response.send(deleteMedia);
	}
}

export { DeleteMediaController };
