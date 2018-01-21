import { Component, Input } from '@angular/core';

import { CartItem } from '../carts.model';
import { CartService } from '../carts.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})

export class CartListComponent {
  @Input() cartProducts: Array<CartItem>;

  constructor(public cartService: CartService) {
  }

  get fullAmount(): number {
    return this.cartService.getFullAmount();
  }
}
