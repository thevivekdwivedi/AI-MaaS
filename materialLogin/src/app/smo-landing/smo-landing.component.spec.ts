import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmoLandingComponent } from './smo-landing.component';

describe('SmoLandingComponent', () => {
  let component: SmoLandingComponent;
  let fixture: ComponentFixture<SmoLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmoLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmoLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
