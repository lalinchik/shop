import { Injectable } from '@angular/core';

import { Product } from '../products/products.model';

@Injectable()
export class CartService {
  cartProducts: Array<Product> = [];

  constructor() {
  }

  getProducts(): Array<Product> {
    return this.cartProducts;
  }
}
