import { TestBed } from '@angular/core/testing';

import { Serviciul1Service } from './serviciul1.service';

describe('Serviciul1Service', () => {
  let service: Serviciul1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Serviciul1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
