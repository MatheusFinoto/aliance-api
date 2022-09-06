import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateAccountUseCase } from './createAccountUseCase';

class CreateAccountController {
	async handle(reques: Request, response: Response): Promise<Response> {
		const { acc_name, acc_email, acc_password, acc_password_confirm } =
			reques.body;
		const createAccountUseCase = container.resolve(CreateAccountUseCase);
		const createAccount = await createAccountUseCase.execute({
			acc_name,
			acc_email,
			acc_password,
			acc_password_confirm,
		});
		return response.send(createAccount);
	}
}

export { CreateAccountController };
