import { IMediaRepositories } from '../../iRespositories/iMediaRepositories';
import { inject, injectable } from 'tsyringe';
import { AppResponse } from '../../../../helper/responseParse';
import { AppError } from 'src/helper/errorHandler';

interface IMediaRequest {
	med_id: string;
	med_image: string;
	med_link: string;
	med_title: string;
	med_type: number;
	med_description: string;
}

@injectable()
class UpdateMediaUseCase {
	constructor(
		@inject('MediaRepository') private mediaRepository: IMediaRepositories
	) {}

	async execute({
		med_id,
		med_image,
		med_link,
		med_title,
		med_type,
		med_description,
	}: IMediaRequest): Promise<AppResponse> {
		const listById = await this.mediaRepository.listById(med_id);

		if (!listById) {
			throw new AppError({
				result: 'error',
				statusCode: 400,
				message: 'Mídia não encontrada',
			});
		}

		const updateMedia = await this.mediaRepository.updateMedia({
			med_id,
			med_title,
			med_type,
			med_link,
			med_image,
			med_description,
		});

		return new AppResponse({
			data: updateMedia,
			result: 'success',
			message: 'Alteração feita com sucesso!',
			statusCode: 200,
		});
	}
}

export { UpdateMediaUseCase };
