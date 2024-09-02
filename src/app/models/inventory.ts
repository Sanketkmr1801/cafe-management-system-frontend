export class Inventory {
    inventoryID: number;
    itemName: string;
    quantity: number;
    unitPrice: number;
  
    get totalValue(): number {
      return this.quantity * this.unitPrice;
    }
  }
  