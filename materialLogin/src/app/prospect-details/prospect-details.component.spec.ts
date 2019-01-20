import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectDetailsComponent } from './prospect-details.component';

describe('ProspectDetailsComponent', () => {
  let component: ProspectDetailsComponent;
  let fixture: ComponentFixture<ProspectDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProspectDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProspectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
