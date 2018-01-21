import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../products.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() addProduct: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(public ProductService: ProductsService) {
  }

  ngOnInit() {
  }

  onAddProduct(): void {
    const product = new Product(this.product.name, this.product.price, this.product.quantity);

    this.ProductService.reduceQuantity(product);
    this.addProduct.emit(product);
  }
}
