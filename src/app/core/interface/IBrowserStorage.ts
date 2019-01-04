import { Injectable } from '@angular/core';


@Injectable()
export abstract class IBrowserStorage {
  abstract  set(key :  string, value: string) : void;
  abstract  get(key :  string) : string;
}