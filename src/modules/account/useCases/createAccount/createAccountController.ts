import {Request, Response} from "express";
import {CreateAccountUseCase} from "./createAccountUseCase"
import {container} from "tsyringe";

class CreateAccountController{
    
    async handle(reques: Request, response: Response):Promise<Response>{
        const {acc_name, acc_email, acc_password} = reques.body;
        const createAccountUseCase = container.resolve(CreateAccountUseCase);
        const createAccount = await createAccountUseCase.execute({acc_name,acc_email, acc_password});
        return response.send(createAccount);
    }
}

export { CreateAccountController}