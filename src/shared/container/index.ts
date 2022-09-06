import './providers';
import { container } from 'tsyringe';
import { AccountRepository } from '../../modules/account/repositories/AccountRepository';
import { IAccountRepositories } from '../../modules/account/iRepostories/IAccountRepostories';

container.registerSingleton<IAccountRepositories>(
	'AccountRepository',
	AccountRepository
);
