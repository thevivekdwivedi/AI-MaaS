import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectHeaderComponent } from './prospect-header.component';

describe('ProspectHeaderComponent', () => {
  let component: ProspectHeaderComponent;
  let fixture: ComponentFixture<ProspectHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProspectHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProspectHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
