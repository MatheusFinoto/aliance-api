import { IAccount, IAccountCreate, IAccountUpdate } from '../dtos/Account';

export interface IAccountRepositories {
	create(props: IAccountCreate): Promise<IAccount>;
	findOne(acc_email: string): Promise<IAccount | null>;
	listAll(
		page: number,
		limit: number,
		country: string | null
	): Promise<IAccount[]>;
	update(props: IAccountUpdate): Promise<IAccount>;
	delete(acc_id: string): Promise<void>;
	findById(acc_id: string): Promise<IAccount | null>;
}
