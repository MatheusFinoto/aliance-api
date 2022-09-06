import './providers';
import { container } from 'tsyringe';
import { AccountRepository } from '../../modules/account/repositories/AccountRepository';
import { IAccountRepositories } from '../../modules/account/iRepositories/IAccountRepositories';

container.registerSingleton<IAccountRepositories>(
	'AccountRepository',
	AccountRepository
);
