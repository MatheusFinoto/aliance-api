import bcrypt from 'bcrypt';
import { IEncryptProvider, IEncryptResponse } from '../iEncryptProvider';

class BCryptProvider implements IEncryptProvider {
	async encryptPassword(password: string): Promise<IEncryptResponse> {
		const salt = await bcrypt.genSalt(10);

		const hash = await bcrypt.hash(password, salt);

		return { password: hash, salt };
	}
}

export { BCryptProvider };
