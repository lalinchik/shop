import { Component, Input } from '@angular/core';

import { Product } from '../products/products.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent {
  @Input() cartProducts: Array<Product>;

  get fullAmount(): number {
    return this.cartProducts.reduce((sum, product) => sum += product.price, 0);
  }
}
