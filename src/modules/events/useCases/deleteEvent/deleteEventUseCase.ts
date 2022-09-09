import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../helper/errorHandler';
import { AppResponse } from '../../../../helper/responseParse';
import { IEventRepositories } from '../../iRepositories/IEventRepositories';

@injectable()
class DeleteEventUseCase {
	constructor(
		@inject('EventRepository') private eventRepository: IEventRepositories
	) {}

	async execute(eve_id: string): Promise<AppResponse> {
		const eventAlreadyExists = await this.eventRepository.findById(eve_id);

		if (!eventAlreadyExists) {
			throw new AppError({
				message: 'Evento não encontrado',
				result: 'error',
				statusCode: 400,
			});
		}

		await this.eventRepository.delete(eve_id);

		return new AppResponse({
			result: 'success',
			message: 'Evento deletado com sucesso',
			statusCode: 200,
		});
	}
}

export { DeleteEventUseCase };
