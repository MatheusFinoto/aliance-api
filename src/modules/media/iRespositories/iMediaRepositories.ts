import { IMedia, IMediaCreate } from '../dtos/Media';

interface IMediaRepositories {
	create(props: IMediaCreate): Promise<IMedia>;
}

export { IMediaRepositories };
