import { Component, OnInit } from '@angular/core';
import {TestServices} from '../test.service'

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private students:TestServices) {

  }
  ngOnInit(){
    
  }
}
