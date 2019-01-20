import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierTrendsComponent } from './supplier-trends.component';

describe('SupplierTrendsComponent', () => {
  let component: SupplierTrendsComponent;
  let fixture: ComponentFixture<SupplierTrendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierTrendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
