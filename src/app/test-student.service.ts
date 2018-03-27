import { Injectable } from '@angular/core';
import { TestService,TestServices} from './test.service';

@Injectable()
export class TestStudentService implements TestServices {
  getData() {
    const list: TestService[] = [
      {
        firstName:'prasanth',
        lastName: 'devarapalli',
        age: 25
      }
    ];
    return list;
  }
}
