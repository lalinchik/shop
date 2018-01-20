import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductComponent } from './components/products/product/product.component';
import { ProductsService } from './components/products/products.service';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { CartListComponent } from './components/carts/cart-list/cart-list.component';
import { CartService } from './components/carts/carts.service';
import { CartItemComponent } from './components/carts/cart-item/cart-item.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    CartListComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProductsService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
