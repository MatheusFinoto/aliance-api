import prisma from '../../../libs/prismaClient';
import { IMediaCreate, IMedia, IMediaUpdate } from './../dtos/Media';
import { IMediaRepositories } from '../iRespositories/iMediaRepositories';
import { PrismaClientRustPanicError } from '@prisma/client/runtime';

class MediaRepository implements IMediaRepositories {
	async create(props: IMediaCreate): Promise<IMedia> {
		return prisma.tb_media.create({
			data: props,
		});
	}

	async listAll(): Promise<IMedia[]> {
		return prisma.tb_media.findMany({
			where: {
				med_active: true,
			},
		});
	}
	async updateMedia({
		med_id,
		med_title,
		med_type,
		med_link,
		med_image,
		med_description,
	}: IMediaUpdate): Promise<IMedia> {
		return prisma.tb_media.update({
			where: { med_id: med_id },
			data: {
				med_title,
				med_description,
				med_image,
				med_link,
				med_type,
			},
		});
	}

	async listById(med_id: string): Promise<IMedia | null> {
		return prisma.tb_media.findFirst({
			where: {
				med_id,
				med_active: true,
			},
		});
	}

	async delete(med_id: string): Promise<void> {
		await prisma.tb_media.update({
			where: { med_id },
			data: {
				med_active: false,
			},
		});
	}
}

export { MediaRepository };
