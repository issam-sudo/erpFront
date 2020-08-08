import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPreferenceComponent } from './header-preference.component';

describe('HeaderPreferenceComponent', () => {
  let component: HeaderPreferenceComponent;
  let fixture: ComponentFixture<HeaderPreferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderPreferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
