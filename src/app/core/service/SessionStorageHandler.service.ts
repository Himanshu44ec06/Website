import { Injectable } from '@angular/core';
import { IBrowserStorage } from '../interface/IBrowserStorage';

@Injectable({
    providedIn : 'root'
})
export  class SessionStorageHandler implements  IBrowserStorage {

    constructor(){}

    set(key:string,value: string) : void {
        localStorage.setItem(key,value || '');
    }

    get(key: string) : any  {
        return localStorage.getItem(key);            
    }
}