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

  public customer;
  public columnDisplay = ["ID","firstName","lastName"];

  constructor(private service: ModelDataService) {
  }
  
  ngOnInit(){             
  
    this.service.getCustomerFromAPI()
        .subscribe((res) =>{ 
          this.customer = res;
        
        }); 
  }

}
