import { Routes } from '@angular/router';
import { RegistrationComponent } from './registration-page/registration-page.component';


export class  RegistrationRoute {
    static  Routes  : Routes = [
        { path : '', component: RegistrationComponent }
    ]
}