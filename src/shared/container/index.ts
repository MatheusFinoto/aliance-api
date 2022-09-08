import './providers';
import { container } from 'tsyringe';
import { MediaRepository } from '../../modules/media/repositories/MediaRepository';
import { IMediaRepositories } from 'src/modules/media/iRespositories/iMediaRepositories';
import { AccountRepository } from '../../modules/account/repositories/AccountRepository';
import { IAccountRepositories } from '../../modules/account/iRepositories/IAccountRepositories';

container.registerSingleton<IAccountRepositories>(
	'AccountRepository',
	AccountRepository
);

container.registerSingleton<IMediaRepositories>(
	'MediaRepository',
	MediaRepository
);
