import { TestBed } from '@angular/core/testing';

import { BtnsService } from './btns.service';

describe('BtnsService', () => {
  let service: BtnsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BtnsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
