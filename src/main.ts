import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { Routes } from '@angular/router';
import { UserComponent } from './app/components/user/user.component';
import { OrderComponent } from './app/components/order/order.component';
import { MenuItemComponent } from './app/components/menu-item/menu-item.component';
import { InventoryComponent } from './app/components/inventory/inventory.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { UserAddComponent } from './app/components/user-add/user-add.component';
import { UserEditComponent } from './app/components/user-edit/user-edit.component';
import { MenuItemAddComponent } from './app/components/menu-item-add/menu-item-add.component';
import { MenuItemEditComponent } from './app/components/menu-item-edit/menu-item-edit.component';
import { InventoryAddComponent } from './app/components/inventory-add/inventory-add.component';
import { InventoryEditComponent } from './app/components/inventory-edit/inventory-edit.component';

const routes: Routes = [
  { path: 'users', component: UserComponent },
  { path: 'user/add', component: UserAddComponent },
  { path: 'user/edit/:id', component: UserEditComponent },
  { path: 'orders', component: OrderComponent },
  { path: 'menu-items', component: MenuItemComponent },
  { path: 'menu-item/add', component: MenuItemAddComponent },
  { path: 'menu-item/edit/:id', component: MenuItemEditComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'inventory/add', component: InventoryAddComponent },
  { path: 'inventory/edit/:id', component: InventoryEditComponent },

  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: '**', redirectTo: '/users' }
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideHttpClient(withFetch())]
})
  .catch(err => console.error(err));