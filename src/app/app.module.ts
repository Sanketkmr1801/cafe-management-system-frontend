import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { OrderComponent } from './components/order/order.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuItemService } from './services/menu-item.service';
import { UserService } from './services/user.service';
import { OrderService } from './services/order.service';
import { InventoryService } from './services/inventory.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    OrderComponent,
    MenuItemComponent,
    InventoryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [MenuItemService, UserService, OrderService, InventoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
