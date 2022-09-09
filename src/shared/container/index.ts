import './providers';
import { container } from 'tsyringe';
import { IMediaRepositories } from 'src/modules/media/iRespositories/iMediaRepositories';

import { IEventRepositories } from 'src/modules/events/iRepositories/IEventRepositories';
import { MediaRepository } from '../../modules/media/repositories/MediaRepository';
import { AccountRepository } from '../../modules/account/repositories/AccountRepository';
import { IAccountRepositories } from '../../modules/account/iRepositories/IAccountRepositories';
import { EventRepository } from '../../modules/events/repositories/EventRepository';

container.registerSingleton<IAccountRepositories>(
	'AccountRepository',
	AccountRepository
);

container.registerSingleton<IMediaRepositories>(
	'MediaRepository',
	MediaRepository
);
container.registerSingleton<IEventRepositories>(
	'EventRepository',
	EventRepository
);
