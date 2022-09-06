import { IEncryptProvider } from 'src/shared/container/providers/encryptProvider/iEncryptProvider';
import { IUuidProvider } from 'src/shared/container/providers/uuidProvider/iUuidProvider';
import { inject, injectable } from 'tsyringe';
import { AppResponse } from '../../../../helper/responseParse';

import { IAccountRepositories } from '../../iRepostories/IAccountRepostories';

interface ICreateRequest {
	acc_name: string;
	acc_email: string;
	acc_password: string;
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
	}: ICreateRequest): Promise<AppResponse> {
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
