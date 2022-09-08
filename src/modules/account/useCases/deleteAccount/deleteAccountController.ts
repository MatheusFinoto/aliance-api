import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeleteAccountUseCase } from './deleteAccountUseCase';

class DeleteAccountController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { acc_id } = request.params;

		const deleteAccountUseCase = container.resolve(DeleteAccountUseCase);

		const deleteAccount = await deleteAccountUseCase.execute(acc_id);

		return response.send(deleteAccount);
	}
}

export { DeleteAccountController };
