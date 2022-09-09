import { injectable, inject } from 'tsyringe';
import { AppResponse } from '../../../../helper/responseParse';
import { IMediaRepositories } from '../../iRespositories/iMediaRepositories';

@injectable()
class ListAllMediaUseCase {
	constructor(
		@inject('MediaRepository') private mediaRepository: IMediaRepositories
	) {}

	async execute(): Promise<AppResponse> {
		const listMedia = await this.mediaRepository.listAll();

		return new AppResponse({
			data: listMedia,
			message: 'Listagem feita com sucesso',
			statusCode: 200,
			result: 'success',
		});
	}
}

export { ListAllMediaUseCase };
