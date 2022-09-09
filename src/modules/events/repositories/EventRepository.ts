import prisma from '../../../libs/prismaClient';
import { IEvent, IEventCreate, IEventList } from '../dtos/Event';
import { IEventRepositories } from '../iRepositories/IEventRepositories';

export class EventRepository implements IEventRepositories {
	async create(props: IEventCreate): Promise<IEvent> {
		return prisma.tb_events.create({
			data: props,
			select: {
				eve_id: true,
				eve_title: true,
				eve_created_at: true,
				eve_image: true,
				eve_description: true,
				eve_date: true,
				eve_active: true,
				eve_updated_at: true,
				eve_created_by: true,
				eve_updated_by: true,
			},
		});
	}

	async listAll(page: number, limit: number): Promise<IEventList[]> {
		return prisma.tb_events.findMany({
			skip: page * limit,
			take: limit,
			select: {
				eve_id: true,
				eve_title: true,
				eve_image: true,
				eve_description: true,
				eve_date: true,
				tb_account_tb_accountTotb_events_eve_created_by: {
					select: {
						acc_name: true,
					},
				},
			},
			where: { eve_active: true },
			orderBy: {
				eve_date: 'desc',
			},
		});
	}

	async update(): Promise<IEvent> {
		throw new Error('Method not implemented.');
	}

	async delete(eve_id: string): Promise<void> {
		await prisma.tb_events.update({
			where: { eve_id },
			data: {
				eve_active: false,
			},
		});
	}

	async findById(eve_id: string): Promise<IEvent | null> {
		return prisma.tb_events.findUnique({ where: { eve_id } });
	}

	async findByTitle(eve_title: string): Promise<IEvent | null> {
		return prisma.tb_events.findFirst({
			where: { eve_title, eve_active: true },
		});
	}
}
