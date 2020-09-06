import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferenceReminderComponent } from './preference-reminder.component';

describe('PreferenceReminderComponent', () => {
  let component: PreferenceReminderComponent;
  let fixture: ComponentFixture<PreferenceReminderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreferenceReminderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferenceReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
