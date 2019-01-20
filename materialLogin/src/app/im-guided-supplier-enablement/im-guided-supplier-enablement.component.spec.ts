import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImGuidedSupplierEnablementComponent } from './im-guided-supplier-enablement.component';

describe('ImGuidedSupplierEnablementComponent', () => {
  let component: ImGuidedSupplierEnablementComponent;
  let fixture: ComponentFixture<ImGuidedSupplierEnablementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImGuidedSupplierEnablementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImGuidedSupplierEnablementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
