import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectMatchRateComponent } from './prospect-match-rate.component';

describe('ProspectMatchRateComponent', () => {
  let component: ProspectMatchRateComponent;
  let fixture: ComponentFixture<ProspectMatchRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProspectMatchRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProspectMatchRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
