import { Component, OnInit } from '@angular/core';

import { CartService } from './cart.service';
import { Product } from '../products/products.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  cartProducts: Array<Product>;

  constructor(public cartService: CartService) {
  }

  ngOnInit() {
    this.cartProducts = this.cartService.getProducts();
  }
}
