

export interface IAccount {
    acc_id:string;
    acc_name:string;
    acc_password:string;
    acc_salt:string;
    acc_email:string;
    acc_created_at:Date;
    acc_image?:string;
    acc_country?:string;
    acc_active:boolean;
}

export interface IAccountCreate{
    acc_id:string;
    acc_name:string;
    acc_password:string;
    acc_salt:string;
    acc_email:string;
    acc_created_at:Date;
    acc_image?:string;
    acc_country?:string;
}
