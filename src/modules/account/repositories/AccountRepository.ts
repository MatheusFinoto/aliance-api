import prisma from '../../../libs/prismaClient';
import { IAccount, IAccountCreate } from '../dtos/Account';
import { IAccountRepositories } from '../iRepostories/IAccountRepostories';

export class AccountRepository implements IAccountRepositories {
	async create(props: IAccountCreate): Promise<IAccount> {
		return prisma.tb_account.create({
			data: props,
			select: {
				acc_id: true,
				acc_name: true,
				acc_email: true,
				acc_created_at: true,
				acc_image: true,
				acc_country: true,
				acc_active: true,
			},
		});
	}

	async findOne(acc_email: string): Promise<IAccount | null> {
		return prisma.tb_account.findFirst({
			where: { acc_email, acc_active: true },
		});
	}

	async listAll(): Promise<IAccount[]> {
		return prisma.tb_account.findMany();
	}

	async update(): Promise<IAccount> {
		throw new Error('Method not implemented.');
	}

	async delete(acc_id: string): Promise<void> {
		throw new Error('Method not implemented.');
	}
}
