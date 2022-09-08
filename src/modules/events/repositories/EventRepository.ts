import prisma from '../../../libs/prismaClient';
import { IEvent, IEventCreate } from '../dtos/Event';
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

	async listAll(): Promise<IEvent[]> {
		throw new Error('Method not implemented.');
	}

	async update(): Promise<IEvent> {
		throw new Error('Method not implemented.');
	}

	async delete(): Promise<void> {
		throw new Error('Method not implemented.');
	}

	async findById(eve_id: string): Promise<IEvent | null> {
		throw new Error('Method not implemented.');
	}
}
