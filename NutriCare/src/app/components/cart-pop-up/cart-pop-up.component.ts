import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartDTO } from 'src/app/models/shopping-cartDTO.model';
import { CartService } from 'src/app/services/cart service/cart.service';

@Component({
  selector: 'app-cart-pop-up',
  templateUrl: './cart-pop-up.component.html',
  styleUrls: ['./cart-pop-up.component.css'],
})
export class CartPopUpComponent {
  shoppingCart?: ShoppingCartDTO;
  userId?: number;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.userId = parseInt(localStorage.getItem('id')!);
    this.getShoppingCart(this.userId!);
  }

  getShoppingCart(userId: number): void {
    this.cartService.getCartByUserId(userId).subscribe({
      next: (cart) => {
        this.shoppingCart = cart;
        console.log(cart);
      },
      error: (err) => {
        console.error('Error fetching shopping cart', err);
      },
    });
  }

  navigateToCheckout(): void {
    this.router.navigate(['/checkout']);
  }

  removeItem(productId: number): void {
    const userId = this.shoppingCart?.userId;
    if (userId) {
      this.cartService.removeItem(this.userId!, productId).subscribe({
        next: () => {
          this.getShoppingCart(this.userId!);
        },
        error: (error) => console.error('Error:', error),
      });
    }
  }

  increaseQuantity(productId: number): void {
    this.changeQuantity(productId, 1);
  }

  decreaseQuantity(productId: number): void {
    this.changeQuantity(productId, -1);
  }

  private changeQuantity(productId: number, change: number): void {
    const userId = this.shoppingCart?.userId;
    if (userId) {
      this.cartService
        .changeQuantity(this.userId!, productId, change)
        .subscribe({
          next: () => {
            this.getShoppingCart(this.userId!);
          },
          error: (error) => console.error('Error:', error),
        });
    }
  }
}
