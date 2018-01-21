import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartService } from './carts.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CartListComponent,
    CartItemComponent
  ],
  providers: [
    CartService
  ],
  exports: [
    CartListComponent
  ]
})
export class CartsModule {
}
