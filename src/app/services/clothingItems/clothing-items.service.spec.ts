import { TestBed } from '@angular/core/testing';

import { ClothingItemsService } from './clothing-items.service';

describe('ClothingItemsService', () => {
  let service: ClothingItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClothingItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
