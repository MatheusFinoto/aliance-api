import { container } from 'tsyringe';

import { BCryptProvider } from './encryptProvider/implementation/BCryptProvider';
import { IEncryptProvider } from './encryptProvider/iEncryptProvider';

import { UuidProvider } from './uuidProvider/implementation/UuidProvider';
import { IUuidProvider } from './uuidProvider/iUuidProvider';

container.registerSingleton<IUuidProvider>('UuidProvider', UuidProvider);
container.registerSingleton<IEncryptProvider>(
	'EncryptProvider',
	BCryptProvider
);
