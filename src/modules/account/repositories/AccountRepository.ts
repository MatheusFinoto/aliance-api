import prisma from '../../../libs/prismaClient';
import { IAccount, IAccountCreate, IAccountUpdate } from '../dtos/Account';
import { IAccountRepositories } from '../iRepositories/IAccountRepositories';

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

	async listAll(page: number, limit: number): Promise<IAccount[]> {
		return prisma.tb_account.findMany({
			skip: page * limit,
			take: limit,
			select: {
				acc_id: true,
				acc_name: true,
				acc_email: true,
				acc_created_at: true,
				acc_image: true,
				acc_country: true,
				acc_active: true,
			},
			where: { acc_active: true },
			orderBy: {
				acc_created_at: 'asc',
			},
		});
	}

	async update(props: IAccountUpdate): Promise<IAccount> {
		return prisma.tb_account.update({
			where: { acc_id: props.acc_id },
			data: {
				acc_email: props.acc_email,
				acc_name: props.acc_name,
				acc_image: props.acc_image,
				acc_country: props.acc_country,
			},
			select: {
				acc_id: true,
				acc_email: true,
				acc_name: true,
				acc_image: true,
				acc_country: true,
				acc_created_at: true,
				acc_active: true,
			},
		});
	}

	async delete(acc_id: string): Promise<void> {
		throw new Error('Method not implemented.');
	}

	async findById(acc_id: string): Promise<IAccount | null> {
		return prisma.tb_account.findUnique({ where: { acc_id } });
	}
}
