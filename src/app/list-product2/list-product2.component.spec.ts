import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProduct2Component } from './list-product2.component';

describe('ListProduct2Component', () => {
  let component: ListProduct2Component;
  let fixture: ComponentFixture<ListProduct2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListProduct2Component]
    });
    fixture = TestBed.createComponent(ListProduct2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
