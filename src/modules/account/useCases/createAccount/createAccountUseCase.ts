import { AccountRepository } from "../../repositories/AccountRepository";
import {AppResponse} from "../../../../helper/responseParse";

import { inject, injectable } from 'tsyringe';
import { IUuidProvider } from "src/shared/container/providers/uuidProvider/iUuidProvider";
import { IAccountRepositories } from "../../iRepostories/IAccountRepostories";


interface ICreateRequest{
    acc_name:string;
    acc_email:string;
    acc_password:string;
}

@injectable()
class CreateAccountUseCase{

    constructor(@inject("UuidProvider") private uuidProvider: IUuidProvider, @inject("AccountRepository") private accountRepository: IAccountRepositories){}

    async execute({acc_name,acc_email, acc_password }:ICreateRequest):Promise<AppResponse>{
        
        const accountCreate = await this.accountRepository.create({acc_id:this.uuidProvider.createUUID(), acc_name, acc_password, acc_salt: "123123", acc_email, acc_created_at: new Date()});
//chasodajhsjhjcj
        return new AppResponse({result: "sucess", message:"Conta criada com sucesso", data:accountCreate , statusCode:200});
    }
}

export { CreateAccountUseCase }