import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import  { LoginRoute }  from './login.routes';
import { LoginPageComponent } from './login-page/login-page.component';
import { ForgotpasswordComponent } from './forgot-password/forgot-password.component';


@NgModule({
    imports :[ RouterModule.forChild(LoginRoute.Routes) ],
    providers:[],
    exports : [],
    declarations:[ LoginPageComponent,  
        ForgotpasswordComponent ]
})
export class  LoginModule  {
 

}