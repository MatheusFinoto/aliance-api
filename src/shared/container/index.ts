import './providers';
import { container } from 'tsyringe';
<<<<<<< HEAD
import { MediaRepository } from '../../modules/media/repositories/MediaRepository';
import { IMediaRepositories } from 'src/modules/media/iRespositories/iMediaRepositories';
=======

import { IEventRepositories } from 'src/modules/events/iRepositories/IEventRepositories';
>>>>>>> 1030a5fcb5bb9cdf966798847a8382c0cea3d209
import { AccountRepository } from '../../modules/account/repositories/AccountRepository';
import { IAccountRepositories } from '../../modules/account/iRepositories/IAccountRepositories';
import { EventRepository } from '../../modules/events/repositories/EventRepository';

container.registerSingleton<IAccountRepositories>(
	'AccountRepository',
	AccountRepository
);

<<<<<<< HEAD
container.registerSingleton<IMediaRepositories>(
	'MediaRepository',
	MediaRepository
=======
container.registerSingleton<IEventRepositories>(
	'EventRepository',
	EventRepository
>>>>>>> 1030a5fcb5bb9cdf966798847a8382c0cea3d209
);
