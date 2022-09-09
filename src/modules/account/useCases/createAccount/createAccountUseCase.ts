import { IUuidProvider } from 'src/shared/container/providers/uuidProvider/iUuidProvider';
import { inject, injectable } from 'tsyringe';
import { IEncryptProvider } from '../../../../shared/container/providers/encryptProvider/iEncryptProvider';
import { AppError } from '../../../../helper/errorHandler';
import { AppResponse } from '../../../../helper/responseParse';
import { IAccountRepositories } from '../../iRepositories/IAccountRepositories';

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
		//! E-MAIL VALIDATION
		const regexEmail = /\S+@\S+.\S+/;

		if (!regexEmail.test(acc_email)) {
			throw new AppError({
				message: 'E-mail Inválido',
				result: 'error',
				statusCode: 400,
			});
		}

		//! PASSWORD VALIDATION
		const regexPassword =
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
		if (!regexPassword.test(acc_password)) {
			throw new AppError({
				message: 'Senha Fraca',
				result: 'error',
				statusCode: 400,
			});
		}

		if (acc_password !== acc_password_confirm) {
			throw new AppError({
				message: 'Senhas não conferem',
				result: 'error',
				statusCode: 400,
			});
		}

		const accountAlreadyExists = await this.accountRepository.findOne(
			acc_email
		);

		if (accountAlreadyExists) {
			throw new AppError({
				message: 'Usuário ja cadastrado com esse email',
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
			result: 'success',
			message: 'Conta criada com sucesso',
			data: accountCreate,
			statusCode: 200,
		});
	}
}

export { CreateAccountUseCase };
