import { Component, OnInit } from '@angular/core';
import { MenuItemService } from '../../services/menu-item.service';
import { MenuItem } from '../../models/menu-item';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  menuItems: MenuItem[] = [];

  constructor(private menuItemService: MenuItemService) {}

  ngOnInit(): void {
    this.loadMenuItems();
  }

  loadMenuItems(): void {
    this.menuItemService.getMenuItems().subscribe((data: MenuItem[]) => {
      this.menuItems = data;
    });
  }

  addMenuItem(): void {
    // Implement logic to add a menu item
  }

  editMenuItem(menuItem: MenuItem): void {
    // Implement logic to edit a menu item
  }

  deleteMenuItem(id: number): void {
    if (confirm('Are you sure you want to delete this menu item?')) {
      this.menuItemService.deleteMenuItem(id).subscribe(() => this.loadMenuItems());
    }
  }
}
