import { Injectable } from '@angular/core';

declare  let toastr : any

Injectable()
export class NotificationHandler {


    notify(message: String,type :  string):void{

        switch(type){
            case  'success' : 
                 toastr.success(message);
            break;
            case  'warning' : 
                toastr.warning(message);
            break;
            case 'error' : 
                toastr.error(message);
            break;
            case 'info' : 
                toastr.info(message);
            break;

            default : 
                toastr.info(message);
            break;
        }

    }

    clear() : void {
           
    }

}