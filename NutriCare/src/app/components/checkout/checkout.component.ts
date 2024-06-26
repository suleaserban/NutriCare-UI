import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderDetailsDTO } from 'src/app/models/orderDetailsDTO';
import { ShoppingCartDTO } from 'src/app/models/shopping-cartDTO.model';
import { CartService } from 'src/app/services/cart service/cart.service';
import { OrderServiceService } from 'src/app/services/order service/order-service.service';

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
  orderDetailsDTO: OrderDetailsDTO | undefined;

  checkoutForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-ZăîâșțĂÎÂȘȚ -]+$'),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-ZăîâșțĂÎÂȘȚ -]+$'),
    ]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('^(\\+\\d{1,3})?\\d{10}$'),
    ]),
    address: new FormControl('', Validators.required),
    county: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    codPostal: new FormControl('', Validators.required),
    cardNumber: new FormControl(''),
    paymentMethod: new FormControl('cash'),

    expiryDate: new FormControl(''),
    securityCode: new FormControl(''),
    cardName: new FormControl(''),
  });

  constructor(
    private cartService: CartService,
    private orderService: OrderServiceService,
    private router: Router
  ) {}

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
    if (this.userId) {
      const orderDetailsDTO = {
        ...this.checkoutForm.value,
      };
      this.orderService.placeOrder(this.userId, orderDetailsDTO).subscribe({
        next: (order) => {
          this.router.navigate(['/thank-you']);
        },
        error: (error) => {
          console.error('Error placing order:', error);
        },
      });
    }
  }

  productImageUrls: { [key: number]: string } = {
    //Ashwaganda
    1: 'https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F4deb4f30d3ceeb7ccf4ed7029328c64e.cdn.bubble.io%2Fd75%2Ff1674465399042x106943037525941250%2FMULBERRY.png?w=256&h=&auto=compress&dpr=1&fit=max',
    //Carbune activ
    2: 'https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F4deb4f30d3ceeb7ccf4ed7029328c64e.cdn.bubble.io%2Fd75%2Ff1694788113560x531922606777332000%2FCOLLAGE%25CC%2580NE%2520NEW%2520%25282%2529.png?w=256&h=&auto=compress&dpr=1&fit=max',
    //B Complex
    3: 'https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F4deb4f30d3ceeb7ccf4ed7029328c64e.cdn.bubble.io%2Fd75%2Ff1663953001242x319848638500417100%2FCOMPLEXE%2520SOLAIRE.png?w=256&h=&auto=compress&dpr=1&fit=max',
    //Calciu
    4: 'https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F4deb4f30d3ceeb7ccf4ed7029328c64e.cdn.bubble.io%2Fd75%2Ff1663952453482x405488024627920450%2FCALCIUM.png?w=256&h=&auto=compress&dpr=1&fit=max',
    //Zinc
    5: 'https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F4deb4f30d3ceeb7ccf4ed7029328c64e.cdn.bubble.io%2Fd75%2Ff1663952950522x769881239016983200%2FZINC.png?w=256&h=&auto=compress&dpr=1&fit=max',
    //Melatonina
    6: 'https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F4deb4f30d3ceeb7ccf4ed7029328c64e.cdn.bubble.io%2Fd75%2Ff1663952355554x578927821720613800%2FB%2520COMPLEXE.png?w=256&h=&auto=compress&dpr=1&fit=max',
    //Seleniu
    7: 'https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F4deb4f30d3ceeb7ccf4ed7029328c64e.cdn.bubble.io%2Fd75%2Ff1670266822667x223127694919237120%2FMACA.png?w=256&h=&auto=compress&dpr=1&fit=max',
    //Silimarina
    8: 'https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F4deb4f30d3ceeb7ccf4ed7029328c64e.cdn.bubble.io%2Fd75%2Ff1670266822667x223127694919237120%2FMACA.png?w=256&h=&auto=compress&dpr=1&fit=max',
    //Probiotice
    9: 'https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F4deb4f30d3ceeb7ccf4ed7029328c64e.cdn.bubble.io%2Fd75%2Ff1697631921184x190580526492102340%2FPROBIOTIQUES%2520%2528PR%2529.png?w=256&h=&auto=compress&dpr=1&fit=max',
    //omega 3 normal
    10: 'https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F4deb4f30d3ceeb7ccf4ed7029328c64e.cdn.bubble.io%2Fd75%2Ff1663952322534x884633552685501000%2FOM%25C3%2589GA%25203.png?w=256&h=&auto=compress&dpr=1&fit=max',
    //Spirulina Naturala
    11: 'https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F4deb4f30d3ceeb7ccf4ed7029328c64e.cdn.bubble.io%2Fd75%2Ff1663952672858x951478205246220300%2FCOMPLEXE%2520ANTI-CHUTE%2520FEMME.png?w=256&h=&auto=compress&dpr=1&fit=max',
    //Vitamina C
    12: 'https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F4deb4f30d3ceeb7ccf4ed7029328c64e.cdn.bubble.io%2Fd75%2Ff1663952399178x979179353770834400%2FVITAMINE%2520C.png?w=256&h=&auto=compress&dpr=1&fit=max',
    //Vitamina D
    13: 'https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F4deb4f30d3ceeb7ccf4ed7029328c64e.cdn.bubble.io%2Fd75%2Ff1663953016838x619873876232511600%2FVITAMINE%2520D.png?w=256&h=&auto=compress&dpr=1&fit=max',
    // Colagen natural
    14: 'https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F4deb4f30d3ceeb7ccf4ed7029328c64e.cdn.bubble.io%2Fd75%2Ff1663952305142x360481894023989100%2FHAIR%2520COMPLEX.png?w=256&h=&auto=compress&dpr=1&fit=max',
    //Turmeric
    15: 'https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F4deb4f30d3ceeb7ccf4ed7029328c64e.cdn.bubble.io%2Fd75%2Ff1663952243150x519349818106231940%2FCURCUMA.png?w=256&h=&auto=compress&dpr=1&fit=max',
    //Fier
    16: 'https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F4deb4f30d3ceeb7ccf4ed7029328c64e.cdn.bubble.io%2Fd75%2Ff1663952599474x128622471697192880%2FFER.png?w=256&h=&auto=compress&dpr=1&fit=max',
    //Ginseng
    17: 'https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F4deb4f30d3ceeb7ccf4ed7029328c64e.cdn.bubble.io%2Fd75%2Ff1701860788656x556458731945536500%2FGINSENG.png?w=256&h=&auto=compress&dpr=1&fit=max',
    // GymNema Extract
    18: 'https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F4deb4f30d3ceeb7ccf4ed7029328c64e.cdn.bubble.io%2Fd75%2Ff1670237197475x748983118581421300%2FCOMPLEXE%2520DRAINANT.png?w=256&h=&auto=compress&dpr=1&fit=max',
    //Magneziu
    19: 'https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F4deb4f30d3ceeb7ccf4ed7029328c64e.cdn.bubble.io%2Fd75%2Ff1664802907202x519059411243796500%2FMAGN%25C3%2589SIUM.png?w=256&h=&auto=compress&dpr=1&fit=max',
    //Vitamina D Vegan
    20: 'https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F4deb4f30d3ceeb7ccf4ed7029328c64e.cdn.bubble.io%2Fd75%2Ff1694508815049x496761772108401000%2FDesign%2520sans%2520titre%2520%252814%2529.png?w=256&h=&auto=compress&dpr=1&fit=max',
    //Omega 3 Vegan
    21: 'https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F4deb4f30d3ceeb7ccf4ed7029328c64e.cdn.bubble.io%2Fd75%2Ff1694790831244x882704883017996400%2FOME%25CC%2581GA%2520VE%25CC%2581GE%25CC%2581TAL.png?w=256&h=&auto=compress&dpr=1&fit=max',
    // Bacopa
    22: 'https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F4deb4f30d3ceeb7ccf4ed7029328c64e.cdn.bubble.io%2Fd75%2Ff1694782366872x690379374157737100%2FBACOPA%2520BA%2520%25282%2529.png?w=256&h=&auto=compress&dpr=1&fit=max',
  };
}
