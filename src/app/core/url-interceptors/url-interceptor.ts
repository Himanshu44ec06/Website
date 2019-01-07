import { DefaultUrlSerializer, UrlTree } from '@angular/router';

export  class  LowerCaseUrlSerializer  implements  DefaultUrlSerializer  {

    parse(url:string) : UrlTree {
        return super.parse(url.toLowerCase()); 
    }

    serialize(tree: UrlTree): string {
         return  super.serialize(tree);
    }
}