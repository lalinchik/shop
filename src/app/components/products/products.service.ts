/* tslint:disable:max-line-length */

import { Injectable } from '@angular/core';

import { Product } from './products.model';
import { Class } from './products.model';

@Injectable()
export class ProductsService {
  products: Array<Product> = [
    new Product('Audi A4', 25000, 'Compact execute car', true, 'http://st.motortrend.com/uploads/sites/5/2017/07/2017-Audi-A4-20T-Quattro-lead.jpg', Class.D, ['BMW 3 Series', 'Buick Regal', 'Jaguar XE']),
    new Product('Audi A6', 30000, 'Executive car', true, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-_ZOyKyo-RZaW5Azx1boaPedPmViPZenncGvtdWk0MmYzmTbcuw', Class.E, ['Peugeot 607', 'Audi A7', 'MG Magnette']),
    new Product('Audi R8', 70000, 'Sports car', true, 'http://st.motortrend.com/uploads/sites/5/2016/05/2017-Audi-R8-V10-front-three-quarter-02-e1462995915964.jpg', Class.S, ['Chevrolet Corvette', 'Mazda MX-5', 'Porsche 911']),
    new Product('Audi TT', 10000, 'Compact sports car', false, 'https://media.ed.edmunds-media.com/audi/tt/2017/oem/2017_audi_tt_coupe_20t-quattro_fq_oem_2_1280.jpg', Class.SCC, ['Lotus Cortina', 'Dodge SRT-4', 'Mitsubishi EVO']),
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
