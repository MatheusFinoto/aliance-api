import { container } from 'tsyringe';

import { BCryptProvider } from '@providers/encryptProvider/implementation/BCryptProvider';
import { IEncryptProvider } from '@providers/encryptProvider/iEncryptProvider';

import { UuidProvider } from '@providers/uuidProvider/implementation/UuidProvider';
import { IUuidProvider } from '@providers/uuidProvider/iUuidProvider';

container.registerSingleton<IUuidProvider>('UuidProvider', UuidProvider);
container.registerSingleton<IEncryptProvider>(
	'EncryptProvider',
	BCryptProvider
);
