import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsPotentialComponent } from './savings-potential.component';

describe('SavingsPotentialComponent', () => {
  let component: SavingsPotentialComponent;
  let fixture: ComponentFixture<SavingsPotentialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingsPotentialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingsPotentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
