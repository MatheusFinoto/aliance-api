import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../helper/errorHandler';
import { AppResponse } from '../../../../helper/responseParse';
import { IAccountRepositories } from '../../iRepositories/IAccountRepositories';

interface IUpdateRequest {
	acc_id: string;
	acc_name: string;
	acc_email: string;
	acc_image: string;
	acc_country: string;
}

@injectable()
class UpdateAccountUseCase {
	constructor(
		@inject('AccountRepository') private accountRepository: IAccountRepositories
	) {}

	async execute({
		acc_id,
		acc_name,
		acc_email,
		acc_image,
		acc_country,
	}: IUpdateRequest): Promise<AppResponse> {
		const accountAlreadyExists = await this.accountRepository.findById(acc_id);

		if (!accountAlreadyExists) {
			throw new AppError({
				message: 'Usuário não encontrado',
				result: 'error',
				statusCode: 400,
			});
		}

		const accountUpdated = await this.accountRepository.update({
			acc_id,
			acc_name,
			acc_country,
			acc_email,
			acc_image,
		});

		return new AppResponse({
			result: 'success',
			message: 'Conta alterada com sucesso',
			data: accountUpdated,
			statusCode: 200,
		});
	}
}

export { UpdateAccountUseCase };
