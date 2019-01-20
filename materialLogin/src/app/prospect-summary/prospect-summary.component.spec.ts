import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectSummaryComponent } from './prospect-summary.component';

describe('ProspectSummaryComponent', () => {
  let component: ProspectSummaryComponent;
  let fixture: ComponentFixture<ProspectSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProspectSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProspectSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
