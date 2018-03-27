import { TestBed, inject } from '@angular/core/testing';

import { SecondStudentService } from './second-student.service';

describe('SecondStudentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecondStudentService]
    });
  });

  it('should be created', inject([SecondStudentService], (service: SecondStudentService) => {
    expect(service).toBeTruthy();
  }));
});
