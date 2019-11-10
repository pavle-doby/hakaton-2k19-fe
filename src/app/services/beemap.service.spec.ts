import { TestBed } from '@angular/core/testing';

import { BeemapService } from './beemap.service';

describe('BeemapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BeemapService = TestBed.get(BeemapService);
    expect(service).toBeTruthy();
  });
});
