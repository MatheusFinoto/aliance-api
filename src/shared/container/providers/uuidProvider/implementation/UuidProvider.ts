import { IUuidProvider } from '../iUuidProvider';

import { v4 as uuidv4, validate } from 'uuid';

class UuidProvider implements IUuidProvider {
	public createUUID(): string {
		return uuidv4();
	}

	public validateUUID(uuid: string): boolean {
		return validate(uuid);
	}
}

export { UuidProvider };
