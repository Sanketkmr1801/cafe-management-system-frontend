import { Order } from './order';
import { MenuItem } from './menu-item';

export class OrderItem {
  orderItemID: number;
  orderID: number;
  order: Order;
  menuItemID: number;
  menuItem: MenuItem;
  quantity: number;
  price: number;
}
