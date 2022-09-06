

interface IAppResponse{
    statusCode:number;
    result:string;
    message:string;
    data?:any;
}

class AppResponse {
   public readonly statusCode:number;
   public readonly result:string;
   public readonly message:string;
   public readonly data?:any;

   constructor({statusCode =200, result, message, data}: IAppResponse){
    this.statusCode = statusCode, this.result = result, this.message = message, this.data = data
   }
}

export {AppResponse};
