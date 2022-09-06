import { Router } from "express";
import { CreateAccountController } from "../modules/account/useCases/createAccount/createAccountController";

const accoutRouter = Router();

accoutRouter.post("/account", new CreateAccountController().handle);

export  {accoutRouter};

