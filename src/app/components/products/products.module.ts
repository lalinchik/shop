import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ProductsService } from './products.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProductListComponent,
    ProductComponent
  ],
  providers: [
    ProductsService
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductsModule { }
