import { inject, injectable } from 'tsyringe';
import { AppResponse } from '../../../../helper/responseParse';
import { IAccountRepositories } from '../../iRepositories/IAccountRepositories';

interface IExecListAccount {
	page: number;
	limit: number;
}

@injectable()
class ListAccountUseCase {
	constructor(
		@inject('AccountRepository') private accountRepository: IAccountRepositories
	) {}

	async execute({
		page = 0,
		limit = 999999999999,
	}: IExecListAccount): Promise<AppResponse> {
		const listAccounts = await this.accountRepository.listAll(
			page,
			limit || 999999999999
		);

		return new AppResponse({
			result: 'success',
			message: 'Listagem feita com sucesso',
			data: listAccounts,
			statusCode: 200,
		});
	}
}

export { ListAccountUseCase };
