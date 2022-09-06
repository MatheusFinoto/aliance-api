interface IEncryptResponse {
	salt: string;
	password: string;
}

interface IEncryptProvider {
	encryptPassword(password: string): Promise<IEncryptResponse>;
}

export { IEncryptProvider, IEncryptResponse };
