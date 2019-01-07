import { NgModule } from '@angular/core';
import { RegistrationComponent } from './registration-page/registration-page.component';
import { RouterModule } from '@angular/router';
import  { RegistrationRoute }  from  './registration.routes';


@NgModule({
    imports :[
        RouterModule.forChild(RegistrationRoute.Routes)
    ],
    exports : [],
    declarations : [
        RegistrationComponent

    ],
    providers:[]
})
export class  RegistrationModule {


}