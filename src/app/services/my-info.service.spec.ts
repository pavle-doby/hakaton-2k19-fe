import { TestBed } from '@angular/core/testing';

import { MyInfoService } from './my-info.service';

describe('MyInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyInfoService = TestBed.get(MyInfoService);
    expect(service).toBeTruthy();
  });
});
