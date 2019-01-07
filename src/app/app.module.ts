import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

import  { httpInterceptorProviders}   from  './core/http-interceptors/index';
import { ErrorsInterceptor } from './core/error-interceptors/errors-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
     
    httpInterceptorProviders, //  http interceptors  
    {
      provide : ErrorHandler,  
      useClass :  ErrorsInterceptor //  Handling errors  globally
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
