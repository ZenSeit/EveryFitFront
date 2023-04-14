import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderGeneratedPageComponent } from './order-generated-page.component';

describe('OrderGeneratedPageComponent', () => {
  let component: OrderGeneratedPageComponent;
  let fixture: ComponentFixture<OrderGeneratedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderGeneratedPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderGeneratedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
