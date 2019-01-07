import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import  { LoginRoute }  from './login.routes';
import { LoginPageComponent } from './login-page/login-page.component';
import { ForgotpasswordComponent } from './forgot-password/forgot-password.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule}  from  '@angular/forms'



@NgModule({
    imports :[ 
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(LoginRoute.Routes) ],
    providers:[],
    exports : [],
    declarations:[ LoginPageComponent,  
        ForgotpasswordComponent ]
})
export class  LoginModule  {
 

}