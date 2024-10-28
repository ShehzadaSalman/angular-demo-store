import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListingSectionComponent } from './product-listing-section.component';

describe('ProductListingSectionComponent', () => {
  let component: ProductListingSectionComponent;
  let fixture: ComponentFixture<ProductListingSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductListingSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
