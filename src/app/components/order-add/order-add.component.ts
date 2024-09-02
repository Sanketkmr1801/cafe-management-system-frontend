import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { MenuItemService } from '../../services/menu-item.service';
import { Order } from '../../models/order';
import { OrderItem } from '../../models/order-item';
import { MenuItem } from '../../models/menu-item';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [HttpClientModule, CommonModule, ReactiveFormsModule],
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.css']
})
export class OrderAddComponent implements OnInit {
  orderForm: FormGroup;
  menuItems: MenuItem[] = [];
  selectedItems: { [menuItemID: number]: { quantity: number; price: number } } = {};

  constructor(
    private fb: FormBuilder,
    private orderService: OrderService,
    private menuItemService: MenuItemService,
    private router: Router
  ) {
    this.orderForm = this.fb.group({
      userID: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.menuItemService.getMenuItems().subscribe(data => {
      this.menuItems = data;
    });
  }

  onAddItem(menuItemID: number, event: Event, price: number): void {
    const input = event.target as HTMLInputElement; // Cast to HTMLInputElement
    const quantity = +input.value; // Convert the value to a number
    
    if (quantity > 0) {
      this.selectedItems[menuItemID] = { quantity, price };
    } else {
      delete this.selectedItems[menuItemID];
    }
  }
  
  

  onSubmit(): void {
    const orderItems: OrderItem[] = Object.keys(this.selectedItems).map(key => {
        const menuItemID = +key;
        const { quantity, price } = this.selectedItems[menuItemID];
        return {
            orderItemID: 0,
            orderID: 0, // This will be set later by the backend
            menuItemID,
            quantity,
            price
        } as OrderItem;
    });

    const order: Order = {
        orderID: 0, // This will be set later by the backend
        orderDate: new Date(),
        totalAmount: orderItems.reduce((sum, item) => sum + item.quantity * item.price, 0),
        userID: this.orderForm.value.userID,
        orderItems: orderItems
    };
    console.log('Sending Order:', order); // Log the order to verify its contents
    this.orderService.addOrder(order).subscribe(() => {
        this.router.navigate(['/orders']);
    });
}

}
