import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ShoppingCartDTO } from 'src/app/models/shopping-cartDTO.model';
import { CartService } from 'src/app/services/cart service/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  shoppingCart?: ShoppingCartDTO;
  userId?: number;

  checkoutForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('^\\+?[1-9]\\d{1,14}$'),
    ]),
    address: new FormControl('', Validators.required),
    county: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
  });

  constructor(private cartService: CartService) {} // Inject your cart service

  ngOnInit(): void {
    this.userId = parseInt(localStorage.getItem('id')!);
    this.getShoppingCart(this.userId!);
  }

  getShoppingCart(userId: number): void {
    this.cartService.getCartByUserId(userId).subscribe({
      next: (cart) => {
        this.shoppingCart = cart;
      },
    });
  }

  onSubmit() {
    console.log(this.checkoutForm.value);
  }
}
