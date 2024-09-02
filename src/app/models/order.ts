import { OrderItem } from './order-item';

export class Order {
  orderID: number;
  orderDate: Date;
  totalAmount: number;
  userID: number | null;
  orderItems: OrderItem[];
}