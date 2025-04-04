import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loanAmount = 10000;
  loanPeriod = 12;
  totalPayable = 0;

  constructor() {
    this.calculateLoan();
  }

  calculateLoan() {
    const interestRate = 0.05; 
    this.totalPayable = this.loanAmount + (this.loanAmount * interestRate * (this.loanPeriod / 12));
  }

  applyLoan() {
    console.log(`Loan Amount: ${this.loanAmount}, Loan Period: ${this.loanPeriod}, Total Payable: ${this.totalPayable}`);
  }
}