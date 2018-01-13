import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Product } from './components/products/products.model';
import { CartService } from './components/cart/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  product: Product;
  cartProducts: Array<Product> = [];
  cartProductsSubscription: Subscription;

  constructor(public cartService: CartService) {
  }

  ngOnInit() {
    this.cartProductsSubscription = this.cartService.getProducts()
      .subscribe(products => {
        this.cartProducts = products;
      });
  }

  ngOnDestroy(): void {
    if (this.cartProductsSubscription) {
      this.cartProductsSubscription.unsubscribe();
    }
  }

  onBuy(): void {
    console.log('Product was purchased');
  }
}
