import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToShoppingCartComponent } from './add-to-shopping-cart.component';

describe('AddToShoppingCartComponent', () => {
  let component: AddToShoppingCartComponent;
  let fixture: ComponentFixture<AddToShoppingCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToShoppingCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddToShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
