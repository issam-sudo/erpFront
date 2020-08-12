import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleContainerComponent } from './sale-container.component';

describe('SaleContainerComponent', () => {
  let component: SaleContainerComponent;
  let fixture: ComponentFixture<SaleContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
