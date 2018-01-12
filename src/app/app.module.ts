import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductComponent } from './components/products/product/product.component';
import { ProductsService } from './components/products/products.service';
import { ProductListComponentComponent } from './components/products/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { CartService } from './components/cart/cart.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponentComponent,
    CartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProductsService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
