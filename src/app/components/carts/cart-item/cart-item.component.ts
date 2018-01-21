import { Component, HostBinding, HostListener, Input} from '@angular/core';

import { CartItem } from '../carts.model';
import { CartService } from '../carts.service';
import { ProductsService } from '../../products/products.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() cartItem: CartItem;
  public isQuantityIncrease = false;

  @HostBinding('style.background-color') backgroundColor = '#fff';

  @HostListener('mouseover')
  onMouseOver() {
    this.backgroundColor = '#eeeeee9c';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.backgroundColor = '#fff';
  }

  constructor(public cartService: CartService,
              public productService: ProductsService) {
  }

  onReduceQuantity() {
    const product = this.productService.getProductByName(this.cartItem.name);

    if (this.cartItem.quantity > 1) {
      --this.cartItem.quantity;
      this.productService.increaseQuantity(product);
    }
  }

  onInreaseQuantity() {
    const product = this.productService.getProductByName(this.cartItem.name);

    if (product.quantity > 0) {
      ++this.cartItem.quantity;
      this.productService.reduceQuantity(product);
      this.isQuantityIncrease = false;
    } else {
      this.isQuantityIncrease = true;
    }
  }

  onDeleteCartItem() {
    const cartItem = new CartItem(this.cartItem.name, this.cartItem.quantity, this.cartItem.price);

    this.cartService.deleteProduct(cartItem);
  }
}
