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

const routes: Routes = [
  { path: 'users', component: UserComponent },
  { path: 'orders', component: OrderComponent },
  { path: 'menu-items', component: MenuItemComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: '**', redirectTo: '/users' }
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideHttpClient(withFetch())]
})
  .catch(err => console.error(err));