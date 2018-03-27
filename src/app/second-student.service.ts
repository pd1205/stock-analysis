import { Injectable } from '@angular/core';
import { TestService, TestServices} from './test.service';

@Injectable()
export class SecondStudentService implements TestServices{
getData() {
  const list: TestService[] = [
    {
      firstName: 'Nikhil',
      lastName: 'ganji',
      age: 33
    }
  ];
  return list;
  }
}
