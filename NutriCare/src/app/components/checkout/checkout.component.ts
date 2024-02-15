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
  cardType: string | null = null;
  paymentMethod: string = 'cash';

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
    cardNumber: new FormControl(''),
    paymentMethod: new FormControl('cash'),

    expiryDate: new FormControl(''),
    securityCode: new FormControl(''),
    cardName: new FormControl(''),
  });

  constructor(private cartService: CartService) {}

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

  onPaymentMethodChange(method: string) {
    this.paymentMethod = method;
    // Reset card fields if cash is selected
    if (method === 'cash') {
      this.checkoutForm.patchValue({
        cardNumber: '',
        expiryDate: '',
        securityCode: '',
        cardName: '',
      });
      this.cardType = null;
    }
  }

  detectCardType(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;
    const mastercardRegex = /^5[1-5][0-9]{14}$/;

    if (visaRegex.test(value)) {
      this.cardType = 'Visa';
    } else if (mastercardRegex.test(value)) {
      this.cardType = 'MasterCard';
    } else {
      this.cardType = null;
    }
  }
  onSubmit() {
    console.log(this.checkoutForm.value);
  }
}
