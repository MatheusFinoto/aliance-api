import { IEvent, IEventCreate, IEventList } from '../dtos/Event';

export interface IEventRepositories {
	create(props: IEventCreate): Promise<IEvent>;
	listAll(page: number, limit: number): Promise<IEventList[]>;
	update(): Promise<IEvent>;
	delete(eve_id: string): Promise<void>;
	findById(eve_id: string): Promise<IEvent | null>;
	findByTitle(eve_title: string): Promise<IEvent | null>;
}
