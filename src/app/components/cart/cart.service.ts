import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Product } from '../products/products.model';

@Injectable()
export class CartService {
  private products: Array<Product> = [];
  private cartProducts: BehaviorSubject<Array<Product>> = new BehaviorSubject(this.products);

  addProductToCart(product) {
    this.products = [...this.products, product];
    this.cartProducts.next(this.products);
  }

  getProducts() {
    return this.cartProducts.asObservable();
  }
}
