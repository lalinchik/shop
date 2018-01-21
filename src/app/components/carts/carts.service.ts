/* tslint:disable:max-line-length */

///<reference path="../../../../node_modules/rxjs/Subject.d.ts"/>
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { CartItem } from './carts.model';

@Injectable()
export class CartService {
  private products: Array<CartItem> = [];
  private cartProducts: BehaviorSubject<Array<CartItem>> = new BehaviorSubject(this.products);

  addProductToCart(product) {
    const indexDuplicate = this.products.findIndex(el => el.name === product.name);

    if (indexDuplicate !== -1) {
      const quantity = ++this.products[indexDuplicate].quantity;

      this.products = [...this.products.slice(0, indexDuplicate), new CartItem(product.name, quantity, product.price), ...this.products.slice(indexDuplicate + 1)];
    } else {
      this.products = [...this.products, new CartItem(product.name, 1, product.price)];
    }

    this.cartProducts.next(this.products);
  }

  getProducts() {
    return this.cartProducts.asObservable();
  }

  getFullAmount(): number {
    return this.products.reduce((sum, product) => sum += product.quantity * product.price, 0);
  }

  deleteProduct(product) {
    const indexDuplicate = this.products.findIndex(el => el.name === product.name);

    this.products = [...this.products.slice(0, indexDuplicate), ...this.products.slice(indexDuplicate + 1)];

    this.cartProducts.next(this.products);
  }
}
