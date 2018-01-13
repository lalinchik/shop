import { Component, OnInit } from '@angular/core';

import { Product } from '../products.model';
import { ProductsService } from '../products.service';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  products: Array<Product>;

  constructor(public productsService: ProductsService,
              public cartService: CartService) {
  }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  onAddProduct(product) {
    this.cartService.addProductToCart(product);
  }
}
