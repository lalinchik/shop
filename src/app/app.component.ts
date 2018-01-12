import { Component, OnInit } from '@angular/core';

import { Product } from './components/products/products.model';
import { ProductsService } from './components/products/products.service';
import { CartService } from './components/cart/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  product: Product;
  cartProducts: Array<Product>;

  constructor(public productsService: ProductsService, public cartService: CartService) {
  }

  ngOnInit() {
    this.product = this.productsService.getProduct();
    this.cartProducts = this.cartService.getProducts();
  }

  onBuy(): void {
    console.log('Product was purchased');
  }
}
