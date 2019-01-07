import { Routes } from "@angular/router";
import { LoginPageComponent } from './login-page/login-page.component';
import { ForgotpasswordComponent } from './forgot-password/forgot-password.component';



export class  LoginRoute {

// Defining  Login module Routes 
 static Routes : Routes = [ 
    { path: '',  component :  LoginPageComponent, data : { title : 'Login'} },
    {path :'forgotpassword', component: ForgotpasswordComponent, data  : { title:'forgot password'}},
    
    ];

}



