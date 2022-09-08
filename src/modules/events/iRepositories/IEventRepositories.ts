import { IEvent, IEventCreate } from '../dtos/Event';

export interface IEventRepositories {
	create(props: IEventCreate): Promise<IEvent>;
	listAll(): Promise<IEvent[]>;
	update(): Promise<IEvent>;
	delete(): Promise<void>;
	findById(eve_id: string): Promise<IEvent | null>;
}
