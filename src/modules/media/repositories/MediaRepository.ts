import prisma from '../../../libs/prismaClient';
import { IMediaCreate, IMedia } from './../dtos/Media';
import { IMediaRepositories } from '../iRespositories/iMediaRepositories';

class MediaRepository implements IMediaRepositories {
	async create(props: IMediaCreate): Promise<IMedia> {
		return prisma.tb_media.create({
			data: props,
		});
	}
}

export { MediaRepository };
