import { IMedia, IMediaCreate, IMediaUpdate } from '../dtos/Media';

interface IMediaRepositories {
	create(props: IMediaCreate): Promise<IMedia>;
	listAll(): Promise<IMedia[]>;
	updateMedia(props: IMediaUpdate): Promise<IMedia>;
	listById(med_id: string): Promise<IMedia | null>;
	delete(med_id: string): Promise<void>;
}

export { IMediaRepositories };
