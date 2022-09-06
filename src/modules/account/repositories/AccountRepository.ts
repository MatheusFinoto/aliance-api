import prisma from "../../../libs/prismaClient";
import { IAccount, IAccountCreate } from "../dtos/Account";
import { IAccountRepostories } from "../iRepostories/IAccountRepostories";

export class AccountRepository implements IAccountRepostories{
    async create(props: IAccountCreate): Promise<IAccount> {
        return prisma.tb_account.create({data:props});
    }
    async listAll(): Promise<IAccount[]> {
        return prisma.tb_account.findMany();
    }
    async update(): Promise<IAccount> {
        throw new Error("Method not implemented.");
    }
    async delete(acc_id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

}