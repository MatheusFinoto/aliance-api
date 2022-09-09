import { IUuidProvider } from 'src/shared/container/providers/uuidProvider/iUuidProvider';
import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../helper/errorHandler';
import { AppResponse } from '../../../../helper/responseParse';
import { IEventRepositories } from '../../iRepositories/IEventRepositories';

interface ICreateRequest {
	eve_title: string;
	eve_image: string;
	eve_description: string;
	eve_date: Date;
	eve_created_by: string;
}

@injectable()
class CreateEventUseCase {
	constructor(
		@inject('UuidProvider') private uuidProvider: IUuidProvider,
		@inject('EventRepository') private eventRepository: IEventRepositories
	) {}

	async execute({
		eve_title,
		eve_image,
		eve_description,
		eve_date,
		eve_created_by,
	}: ICreateRequest): Promise<AppResponse> {
		const eventAlreadyExists = await this.eventRepository.findByTitle(
			eve_title
		);

		if (eventAlreadyExists) {
			throw new AppError({
				message: 'Evento já cadastrado com esse titulo',
				result: 'error',
				statusCode: 400,
			});
		}

		const eventCreate = await this.eventRepository.create({
			eve_id: this.uuidProvider.createUUID(),
			eve_title,
			eve_created_at: new Date(),
			eve_image,
			eve_description,
			eve_date,
			eve_created_by,
		});

		return new AppResponse({
			result: 'success',
			message: 'Evento criado com sucesso',
			data: eventCreate,
			statusCode: 200,
		});
	}
}

export { CreateEventUseCase };
