interface IAppError {
	statusCode: number;
	result: string;
	message: string;
}

class AppError {
	public readonly statusCode: number;
	public readonly result: string;
	public readonly message: string;

	constructor({ statusCode = 500, result, message }: IAppError) {
		this.statusCode = statusCode;
		this.result = result;
		this.message = message;
	}
}

export { AppError };
