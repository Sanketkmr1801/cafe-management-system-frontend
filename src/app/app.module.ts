import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { OrderComponent } from './components/order/order.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    OrderComponent,
    MenuItemComponent,
    InventoryComponent,
    TransactionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule // Use AppRoutingModule for routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
