import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../products.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() addProduct: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() {
  }

  ngOnInit() {
  }

  onAddProduct(): void {
    const product = new Product(this.product.name, this.product.price);

    this.addProduct.emit(product);
  }
}
