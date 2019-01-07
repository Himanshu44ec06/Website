import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

import  { httpInterceptorProviders}   from  './core/http-interceptors/index';
import { ErrorsInterceptor } from './core/error-interceptors/errors-interceptor';
import { UrlSerializer } from '@angular/router';
import { LowerCaseUrlSerializer } from './core/url-interceptors/url-interceptor';

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
    },
    {
      provide  :UrlSerializer,
      useClass : LowerCaseUrlSerializer
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
