import { inject, injectable } from 'tsyringe';
// import { AppError } from '../../../../helper/errorHandler';
import { AppResponse } from '../../../../helper/responseParse';
import { IEventRepositories } from '../../iRepositories/IEventRepositories';

interface IExecListEvent {
	page: number;
	limit: number;
	// country: string | null;
}

@injectable()
class ListEventUseCase {
	constructor(
		@inject('EventRepository') private eventRepository: IEventRepositories
	) {}

	async execute({
		page = 0,
		limit,
	}: // country,
	IExecListEvent): Promise<AppResponse> {
		const listEvents = await this.eventRepository.listAll(
			page,
			limit || 999999999999
		);

		const list = listEvents.map((event) => ({
			eve_id: event.eve_id,
			eve_title: event.eve_title,
			eve_image: event.eve_image,
			eve_description: event.eve_description,
			eve_date: event.eve_date,
			eve_created_by: {
				acc_name:
					event.tb_account_tb_accountTotb_events_eve_created_by.acc_name,
			},
		}));

		return new AppResponse({
			result: 'success',
			message: 'Listagem feita com sucesso',
			data: list,
			statusCode: 200,
		});
	}
}

export { ListEventUseCase };
