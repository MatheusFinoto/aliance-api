import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../helper/errorHandler';
import { AppResponse } from '../../../../helper/responseParse';
import { IEventRepositories } from '../../iRepositories/IEventRepositories';

interface IUpdateRequest {
	eve_id: string;
	eve_title: string;
	eve_image: string;
	eve_description: string;
	eve_date: Date;
	// eve_updated_at: Date | null;
	eve_updated_by: string | null;
}

@injectable()
class UpdateEventUseCase {
	constructor(
		@inject('EventRepository') private eventRepository: IEventRepositories
	) {}

	async execute({
		eve_id,
		eve_title,
		eve_image,
		eve_description,
		eve_date,
		eve_updated_by,
	}: IUpdateRequest): Promise<AppResponse> {
		const eventAlreadyExists = await this.eventRepository.findById(eve_id);

		if (!eventAlreadyExists) {
			throw new AppError({
				message: 'Evento não encontrado',
				result: 'error',
				statusCode: 400,
			});
		}

		const eventUpdate = await this.eventRepository.update({
			eve_id,
			eve_title,
			eve_image,
			eve_description,
			eve_date,
			eve_updated_at: new Date(),
			eve_updated_by,
		});

		const event = {
			eve_id: eventUpdate.eve_id,
			eve_title: eventUpdate.eve_title,
			eve_image: eventUpdate.eve_image,
			eve_description: eventUpdate.eve_description,
			eve_date: eventUpdate.eve_date,
			eve_created_by: {
				acc_name:
					eventUpdate.tb_account_tb_accountTotb_events_eve_created_by.acc_name,
			},
		};

		return new AppResponse({
			result: 'success',
			message: 'Evento alterado com sucesso',
			data: event,
			statusCode: 200,
		});
	}
}

export { UpdateEventUseCase };
