import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListAccountUseCase } from './listAccountUseCase';

class ListAccountController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { page, limit, country } = request.query as unknown as {
			page: number;
			limit: number;
			country: string;
		};
		const listAccountUseCase = container.resolve(ListAccountUseCase);
		const listAccounts = await listAccountUseCase.execute({
			page: Number(page),
			limit: Number(limit),
			country,
		});
		return response.send(listAccounts);
	}
}

export { ListAccountController };
