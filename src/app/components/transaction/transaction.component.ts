import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { Transaction } from '../../models/transaction';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transactions: Transaction[] = [];
  selectedTransaction: Transaction | null = null;
  isEditing = false;

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.loadTransactions();
  }

  loadTransactions(): void {
    this.transactionService.getTransactions().subscribe(
      (data: Transaction[]) => this.transactions = data,
      (error) => console.error('Error fetching transactions', error)
    );
  }

  selectTransaction(transaction: Transaction): void {
    this.selectedTransaction = { ...transaction };
    this.isEditing = true;
  }

  saveTransaction(): void {
    if (this.selectedTransaction) {
      this.transactionService.addTransaction(this.selectedTransaction).subscribe(
        (newTransaction: Transaction) => {
          this.transactions.push(newTransaction);
          this.resetForm();
        },
        (error) => console.error('Error adding transaction', error)
      );
    }
  }

  updateTransaction(): void {
    if (this.selectedTransaction) {
      this.transactionService.updateTransaction(this.selectedTransaction.transactionID, this.selectedTransaction).subscribe(
        () => {
          const index = this.transactions.findIndex(t => t.transactionID === this.selectedTransaction!.transactionID);
          if (index !== -1) {
            this.transactions[index] = this.selectedTransaction!;
            this.resetForm();
          }
        },
        (error) => console.error('Error updating transaction', error)
      );
    }
  }

  deleteTransaction(id: number): void {
    this.transactionService.deleteTransaction(id).subscribe(
      () => this.transactions = this.transactions.filter(t => t.transactionID !== id),
      (error) => console.error('Error deleting transaction', error)
    );
  }

  resetForm(): void {
    this.selectedTransaction = null;
    this.isEditing = false;
  }
}
