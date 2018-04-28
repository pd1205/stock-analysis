import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { DataSource } from '@angular/cdk/table';
import { ModelDataService } from '../model-data.service';
import { MatTableModule } from '@angular/material';
import { customer } from '../modelClass';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css'],
  providers: [ModelDataService]
})
export class AnalyticsComponent implements OnInit {

  public firstName;
  public lastName;
  public customerID;
  constructor(private service: ModelDataService) {
  }

  ngOnInit(){             
  
    this.service.getCustomerFromAPI()
        .subscribe((response) =>{ 
          this.customerID = response[0].customerID;
          this.firstName = response[0].firstName;
          this.lastName = response[0].lastName;
        
        }); 
  }

}
