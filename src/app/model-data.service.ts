import { Injectable } from '@angular/core';
import { customer } from './modelClass';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ModelDataService {

 url = "assets/tableData.json";
  constructor(private http: Http){}
  getCustomerFromAPI(){

    return this.http.get(this.url)
              .map((response: Response) =>  response.json());

    //this.customerID = JSON.stringify(response.json())
  }

}
