import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';
import { Inventory } from '../../models/inventory';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  inventories: Inventory[] = [];

  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {
    this.loadInventories();
  }

  loadInventories(): void {
    this.inventoryService.getInventories().subscribe((data: Inventory[]) => {
      this.inventories = data;
    });
  }

  addInventory(): void {
    // Implement logic to add an inventory item
  }

  editInventory(inventory: Inventory): void {
    // Implement logic to edit an inventory item
  }

  deleteInventory(id: number): void {
    if (confirm('Are you sure you want to delete this inventory item?')) {
      this.inventoryService.deleteInventory(id).subscribe(() => this.loadInventories());
    }
  }
}
