import { Component, OnInit } from '@angular/core';
import { TestService, TestServices} from '../test.service';
import { SecondStudentService } from '../second-student.service';
import { TestStudentService } from '../test-student.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css'],
  providers: [
    {provide: TestServices,
      useClass: TestStudentService
    }
  ]
})
export class HelpComponent implements OnInit{
 lists: TestService[];
 first;
  constructor(private studentLists: TestServices) { }

  ngOnInit() {
    this.lists = this.studentLists.getData();
    // this.first = this.lists.firstName;
    console.log(this.lists);
  }

}
