import { Component, OnInit } from '@angular/core';
import { ShoppingCartDTO } from 'src/app/models/shopping-cartDTO.model';
import { CartService } from 'src/app/services/cart service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  shoppingCart?: ShoppingCartDTO;

  constructor(private shoppingCartService: CartService) {}

  ngOnInit(): void {
    this.getShoppingCart(2);
  }

  getShoppingCart(userId: number): void {
    this.shoppingCartService.getCartByUserId(userId).subscribe({
      next: (cart) => {
        this.shoppingCart = cart;
        console.log(cart);
      },
      error: (err) => {
        console.error('Error fetching shopping cart', err);
      },
    });
  }
}
