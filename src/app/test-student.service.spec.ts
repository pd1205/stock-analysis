import { TestBed, inject } from '@angular/core/testing';

import { TestStudentService } from './test-student.service';

describe('TestStudentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestStudentService]
    });
  });

  it('should be created', inject([TestStudentService], (service: TestStudentService) => {
    expect(service).toBeTruthy();
  }));
});
