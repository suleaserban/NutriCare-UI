import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartDTO } from 'src/app/models/shopping-cartDTO.model';
import { CartService } from 'src/app/services/cart service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {}
