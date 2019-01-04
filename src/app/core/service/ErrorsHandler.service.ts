import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';


@Injectable()
export class  ErrorsHandlers  implements ErrorHandler {
 
    constructor(
        // Because the ErrorHandler is created before the providers, we’ll have to use the Injector to get them
        private injector: Injector){
        }

    //  Base Class  ErrorHandler 
    handleError(error: Error | HttpErrorResponse): void {
            if(error instanceof  HttpErrorResponse){
                 if(navigator.onLine) {
                       // notify  lost internet connection
                 }else {
                     // notify  other status based on error.status
                 }
            }else {
                 //  Handle  Client Error  (Angular Error,  Reference Error...)
            }

            //  Log error anyway
            console.error('It happens: ',error);
    }

    
}