import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { DataSource } from '@angular/cdk/table';
import { ModelDataService } from '../model-data.service';
import { MatTableModule } from '@angular/material';
import { customer } from '../modelClass';
import { isNullOrUndefined } from 'util';
import { customerClass } from '../../app/customer';
import { customersClass } from '../../app/customers';
@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css'],
  providers: [ModelDataService]
})
export class AnalyticsComponent implements OnInit {

  public customer;
  public columnDisplay = ["ID", "firstName", "lastName"];
  public post$;

  constructor(private service: ModelDataService) {
  }

  ngOnInit() {

    this.post$ = this.service.getCustomerFromAPI()
      .subscribe((res) => {
        this.customer = res;
      });

  }
  /*onDelete(cus: customerClass) {
    debugger
    if (!isNullOrUndefined(this.customers)) {
   for(let i=0; i< this.customers.length; i++){
     if(this.customers[i].customerID === cus.customerID){
       this.customers.splice(i,1);
     }
   }
    }

  }*/

}
