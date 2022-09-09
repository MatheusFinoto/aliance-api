import { AppError } from '../../../../helper/errorHandler';
import { AppResponse } from '../../../../helper/responseParse';
import { IMediaRepositories } from '../../../media/iRespositories/iMediaRepositories';
import { injectable, inject } from 'tsyringe';

@injectable()
class DeleteMediaUseCase {
	constructor(
		@inject('MediaRepository') private mediaRepository: IMediaRepositories
	) {}

	async execute(med_id: string): Promise<AppResponse> {
		const idAlreadyExists = await this.mediaRepository.listById(med_id);

		if (!idAlreadyExists) {
			throw new AppError({
				result: 'Error',
				statusCode: 400,
				message: 'Usuário não encontrado!',
			});
		}

		await this.mediaRepository.delete(med_id);

		return new AppResponse({
			result: 'success',
			statusCode: 200,
			message: 'Conta deletada com sucesso!',
		});
	}
}

export { DeleteMediaUseCase };
