import { Injectable } from '@angular/core';

import { Product } from './products.model';

@Injectable()
export class ProductsService {
  products: Array<Product> = [
    new Product('Audi A4', 25000, 'Compact execute car', true),
    new Product('Audi A6', 30000, 'Compact execute car', true),
    new Product('Audi R8', 70000, 'Compact execute car', true),
    new Product('Audi TT', 10000, 'Compact execute car', false),
  ];

  constructor() {
  }

  getProduct(): Product {
    return this.products[0];
  }

  getProducts(): Array<Product> {
    return this.products;
  }
}
