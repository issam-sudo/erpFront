import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleHeaderComponent } from './sale-header.component';

describe('SaleHeaderComponent', () => {
  let component: SaleHeaderComponent;
  let fixture: ComponentFixture<SaleHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
