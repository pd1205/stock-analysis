import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  getStudent(){
  return [
    { "name" : "prasanth", "id" : 1},
    { "name" : "nikhil", "id" : 2},
    { "name" : "siddhu", "id" : 3}
  ];
}
}
