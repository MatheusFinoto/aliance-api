import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateAccountUseCase } from './updateAccountUseCase';

class UpdateAccountController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { acc_id } = request.params;
		const { acc_name, acc_email, acc_image, acc_country } = request.body;

		const updateAccountUseCase = container.resolve(UpdateAccountUseCase);

		const updateAccount = await updateAccountUseCase.execute({
			acc_id,
			acc_name,
			acc_email,
			acc_image,
			acc_country,
		});

		return response.send(updateAccount);
	}
}

export { UpdateAccountController };
