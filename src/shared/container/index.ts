import './providers';
import { container } from 'tsyringe';

import { IEventRepositories } from 'src/modules/events/iRepositories/IEventRepositories';
import { AccountRepository } from '../../modules/account/repositories/AccountRepository';
import { IAccountRepositories } from '../../modules/account/iRepositories/IAccountRepositories';
import { EventRepository } from '../../modules/events/repositories/EventRepository';

container.registerSingleton<IAccountRepositories>(
	'AccountRepository',
	AccountRepository
);

container.registerSingleton<IEventRepositories>(
	'EventRepository',
	EventRepository
);
