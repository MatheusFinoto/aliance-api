import { IUuidProvider } from '@providers/uuidProvider/iUuidProvider';
import { inject, injectable } from 'tsyringe';
import { AppResponse } from '../../../../helper/responseParse';
import { IMediaRepositories } from '../../iRespositories/iMediaRepositories';

interface IMediaRequest {
	med_image: string;
	med_link: string;
	med_title: string;
	med_type: number;
	med_description: string;
}

@injectable()
class CreateMediaUseCase {
	constructor(
		@inject('UuidProvider') private uuidProvider: IUuidProvider,
		@inject('MediaRepository') private mediaRepository: IMediaRepositories
	) {}

	async execute({
		med_description,
		med_image,
		med_link,
		med_title,
		med_type,
	}: IMediaRequest): Promise<AppResponse> {
		const createMedia = await this.mediaRepository.create({
			med_id: this.uuidProvider.createUUID(),
			med_created_at: new Date(),
			med_image,
			med_link,
			med_title,
			med_type,
			med_description,
		});

		return new AppResponse({
			data: createMedia,
			message: 'teste',
			statusCode: 201,
			result: 'success',
		});
	}
}

export { CreateMediaUseCase };
