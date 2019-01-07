import { Injectable } from '@angular/core';
import { toBase64String } from '@angular/compiler/src/output/source_map';

@Injectable({
    providedIn : 'root'
})
export class NotificationHandler {


    notify(message: String,type :  string):void{

        switch(type){
            case  'success' :  break;
            case  'warning' : break;
            case 'error' : break;
            case 'info' : break;

            default : 
            break;
        }

    }

    clear() : void {
           
    }

}