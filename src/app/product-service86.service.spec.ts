import { TestBed } from '@angular/core/testing';

import { ProductService86Service } from './product-service86.service';

describe('ProductService86Service', () => {
  let service: ProductService86Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService86Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
