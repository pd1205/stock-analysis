import { Component, OnInit, Input } from '@angular/core';
import {MatCardModule } from '@angular/material/card';
import { DataService } from '../data.service';
import { TestService, TestServices } from '../test.service'

@Component({
  selector: 'app-user-cards',
  templateUrl: './user-cards.component.html',
  styleUrls: ['./user-cards.component.css'],
})
export class UserCardsComponent implements OnInit {
public nameOne;
@Input() public card;
  constructor(private service:DataService){
    }

  ngOnInit() {
    this.nameOne = this.service.prasanth.members[this.card].name;
  }

}
