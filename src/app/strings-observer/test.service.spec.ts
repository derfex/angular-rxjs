import { TestBed } from '@angular/core/testing';

import { TestService } from './test.service';

describe('TestService', (): void => {
  let service: TestService;

  beforeEach((): void => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestService);
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });
});
