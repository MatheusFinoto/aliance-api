import { IAccountRepositories } from '../../iRepositories/IAccountRepositories';
import { inject, injectable } from 'tsyringe';
import { AppResponse } from '../../../../helper/responseParse';

@injectable()
class ListAccountUseCase {
	constructor(
		@inject('AccountRepository') private accountRepository: IAccountRepositories
	) {}

	async execute(): Promise<AppResponse> {
		const listAccounts = await this.accountRepository.listAll();

		return new AppResponse({
			result: 'success',
			message: 'Listagem feita com sucesso',
			data: listAccounts,
			statusCode: 200,
		});
	}
}

export { ListAccountUseCase };
