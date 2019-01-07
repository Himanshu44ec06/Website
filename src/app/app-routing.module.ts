import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

    {path : 'login', loadChildren :'./auth/login/login.module#LoginModule'},
    {path : 'register', loadChildren :'./auth/registration/registration.module#RegistrationModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
