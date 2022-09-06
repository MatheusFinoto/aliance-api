import { IEncryptProvider } from 'src/shared/container/providers/encryptProvider/iEncryptProvider';
import { IUuidProvider } from 'src/shared/container/providers/uuidProvider/iUuidProvider';
import { inject, injectable } from 'tsyringe';
import { AppResponse } from '../../../../helper/responseParse';
import { AppError } from '../../../../helper/errorHandler';

import { IAccountRepositories } from '../../iRepostories/IAccountRepostories';

interface ICreateRequest {
	acc_name: string;
	acc_email: string;
	acc_password: string;
	acc_password_confirm: string;
}

@injectable()
class CreateAccountUseCase {
	constructor(
		@inject('UuidProvider') private uuidProvider: IUuidProvider,
		@inject('EncryptProvider') private encryptProvider: IEncryptProvider,
		@inject('AccountRepository') private accountRepository: IAccountRepositories
	) {}

	async execute({
		acc_name,
		acc_email,
		acc_password,
		acc_password_confirm,
	}: ICreateRequest): Promise<AppResponse> {
		if (acc_password !== acc_password_confirm) {
			throw new AppError({
				message: 'Senhas não conferem',
				result: 'error',
				statusCode: 400,
			});
		}

		const accoutAlreadyExists = await this.accountRepository.findOne(acc_email);

		if (accoutAlreadyExists) {
			throw new AppError({
				message: 'Usuario ja Cadastrado com esse email',
				result: 'error',
				statusCode: 400,
			});
		}

		const password = await this.encryptProvider.encryptPassword(acc_password);

		const accountCreate = await this.accountRepository.create({
			acc_id: this.uuidProvider.createUUID(),
			acc_name,
			acc_password: password.password,
			acc_salt: password.salt,
			acc_email,
			acc_created_at: new Date(),
		});
		return new AppResponse({
			result: 'sucess',
			message: 'Conta criada com sucesso',
			data: accountCreate,
			statusCode: 200,
		});
	}
}

export { CreateAccountUseCase };
