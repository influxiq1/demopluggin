import { TestBed } from '@angular/core/testing';

import { DemoplugginService } from './demopluggin.service';

describe('DemoplugginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemoplugginService = TestBed.get(DemoplugginService);
    expect(service).toBeTruthy();
  });
});
