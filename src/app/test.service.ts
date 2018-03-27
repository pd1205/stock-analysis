import { Injectable } from '@angular/core';

export interface TestService {

    firstName:string;
    lastName:string;
    age:number;
    
}
@Injectable()
export abstract class TestServices{
  abstract getData():TestService[];
}