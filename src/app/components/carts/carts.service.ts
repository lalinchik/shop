/* tslint:disable:max-line-length */

///<reference path="../../../../node_modules/rxjs/Subject.d.ts"/>
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Product } from '../products/products.model';
import { CartItem } from './carts.model';

@Injectable()
export class CartService {
  private products: Array<CartItem> = [];
  private cartProducts: BehaviorSubject<Array<CartItem>> = new BehaviorSubject(this.products);

  addProductToCart(product): void {
    const indexDuplicate = this.products.findIndex(el => el.name === product.name);

    if (indexDuplicate !== -1) {
      const quantity = ++this.products[indexDuplicate].quantity;

      this.products = [...this.products.splice(0, indexDuplicate), new CartItem(product.name, quantity, product.price), ...this.products.splice(indexDuplicate + 1)];
      console.log(this.products);
    } else {
      this.products = [...this.products, new CartItem(product.name, 1, product.price)];
    }

    this.cartProducts.next(this.products);
  }

  getProducts() {
    return this.cartProducts.asObservable();
  }
}
