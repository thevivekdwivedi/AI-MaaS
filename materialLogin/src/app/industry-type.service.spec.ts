import { TestBed, inject } from '@angular/core/testing';

import { IndustryTypeService } from './industry-type.service';

describe('IndustryTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndustryTypeService]
    });
  });

  it('should be created', inject([IndustryTypeService], (service: IndustryTypeService) => {
    expect(service).toBeTruthy();
  }));
});
