import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectSummaryLimitedComponent } from './prospect-summary-limited.component';

describe('ProspectSummaryLimitedComponent', () => {
  let component: ProspectSummaryLimitedComponent;
  let fixture: ComponentFixture<ProspectSummaryLimitedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProspectSummaryLimitedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProspectSummaryLimitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
