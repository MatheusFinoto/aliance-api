import { IAccount, IAccountCreate } from '../dtos/Account';

export interface IAccountRepositories {
	create(props: IAccountCreate): Promise<IAccount>;
	findOne(acc_email: string): Promise<IAccount | null>;
	listAll(): Promise<IAccount[]>;
	update(): Promise<IAccount>;
	delete(acc_id: string): Promise<void>;
}
