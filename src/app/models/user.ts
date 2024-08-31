import { Order } from './order';

export class User {
  userID!: number;
  userName!: string;
  email!: string;
  passwordHash!: string;
  lastOrderPrice!: number | null;
  orders?: Order[];
}
