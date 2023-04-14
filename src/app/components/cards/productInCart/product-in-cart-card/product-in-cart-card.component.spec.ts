import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInCartCardComponent } from './product-in-cart-card.component';

describe('ProductInCartCardComponent', () => {
  let component: ProductInCartCardComponent;
  let fixture: ComponentFixture<ProductInCartCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductInCartCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductInCartCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
