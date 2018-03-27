import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {
 second;
 first;
  constructor(private service: DataService) {}

  ngOnInit() {
   this.second = this.service.prasanth.members[0].powers[1];
  }

}
