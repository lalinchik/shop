/* tslint:disable:max-line-length */

import { Injectable } from '@angular/core';

import { Product } from './products.model';
import { Class } from './products.model';

@Injectable()
export class ProductsService {
  products: Array<Product> = [
    new Product('Audi A4', 25000, 9, 'Compact execute car', true, 'http://st.motortrend.com/uploads/sites/5/2017/07/2017-Audi-A4-20T-Quattro-lead.jpg', Class.D, ['BMW 3 Series', 'Buick Regal', 'Jaguar XE']),
    new Product('Audi A6', 30000, 7, 'Executive car', true, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-_ZOyKyo-RZaW5Azx1boaPedPmViPZenncGvtdWk0MmYzmTbcuw', Class.E, ['Peugeot 607', 'Audi A7', 'MG Magnette']),
    new Product('Audi R8', 70000, 5, 'Sports car', true, 'http://st.motortrend.com/uploads/sites/5/2016/05/2017-Audi-R8-V10-front-three-quarter-02-e1462995915964.jpg', Class.S, ['Chevrolet Corvette', 'Mazda MX-5', 'Porsche 911']),
    new Product('Audi TT', 10000, 2, 'Compact sports car', false, 'https://media.ed.edmunds-media.com/audi/tt/2017/oem/2017_audi_tt_coupe_20t-quattro_fq_oem_2_1280.jpg', Class.SCC, ['Lotus Cortina', 'Dodge SRT-4', 'Mitsubishi EVO']),
  ];

  constructor() {
  }

  getProducts(): Array<Product> {
    return this.products;
  }

  getProductByName(name) {
    const index = this.products.findIndex(el => el.name === name);

    if (index !== -1) {
      return this.products[index];
    }
  }

  reduceQuantity(product) {
    const index = this.products.findIndex(el => el.name === product.name);
    const quantity = --this.products[index].quantity;

    return [...this.products.slice(0, index), new Product(product.name, product.price, quantity), ...this.products.slice(index + 1)];
  }

  increaseQuantity(product) {
    const index = this.products.findIndex(el => el.name === product.name);
    const quantity = ++this.products[index].quantity;

    return [...this.products.slice(0, index), new Product(product.name, product.price, quantity,), ...this.products.slice(index + 1)];
  }
}
