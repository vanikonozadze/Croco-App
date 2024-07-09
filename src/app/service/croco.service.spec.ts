import { TestBed } from '@angular/core/testing';

import { CrocoService } from './croco.service';

describe('CrocoService', () => {
  let service: CrocoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrocoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
