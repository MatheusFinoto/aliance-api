import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../helper/errorHandler';
import { AppResponse } from '../../../../helper/responseParse';
import { IAccountRepositories } from '../../iRepositories/IAccountRepositories';

@injectable()
class DeleteAccountUseCase {
	constructor(
		@inject('AccountRepository') private accountRepository: IAccountRepositories
	) {}

	async execute(acc_id: string): Promise<AppResponse> {
		const accountAlreadyExists = await this.accountRepository.findById(acc_id);

		if (!accountAlreadyExists) {
			throw new AppError({
				message: 'Usuário não encontrado',
				result: 'error',
				statusCode: 400,
			});
		}

		await this.accountRepository.delete(acc_id);

		return new AppResponse({
			result: 'success',
			message: 'Conta deletada com sucesso',
			statusCode: 200,
		});
	}
}

export { DeleteAccountUseCase };
