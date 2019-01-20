import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticalSupplierDossierComponent } from './critical-supplier-dossier.component';

describe('CriticalSupplierDossierComponent', () => {
  let component: CriticalSupplierDossierComponent;
  let fixture: ComponentFixture<CriticalSupplierDossierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriticalSupplierDossierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriticalSupplierDossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
