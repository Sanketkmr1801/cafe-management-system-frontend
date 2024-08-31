import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { OrderComponent } from './components/order/order.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { InventoryComponent } from './components/inventory/inventory.component';

const routes: Routes = [
  { path: 'users', component: UserComponent },
  { path: 'orders', component: OrderComponent },
  { path: 'menu-items', component: MenuItemComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: '**', redirectTo: '/users' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
