import { IEvent, IEventCreate, IEventList, IEventUpdate } from '../dtos/Event';

export interface IEventRepositories {
	create(props: IEventCreate): Promise<IEvent>;
	listAll(page: number, limit: number): Promise<IEventList[]>;
	update(props: IEventUpdate): Promise<IEventList>;
	delete(eve_id: string): Promise<void>;
	findById(eve_id: string): Promise<IEvent | null>;
	findByTitle(eve_title: string): Promise<IEvent | null>;
}
