import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emicalculator',
  templateUrl: './emicalculator.component.html',
  styleUrls: ['./emicalculator.component.css']
})
export class EmicalculatorComponent implements OnInit {

  constructor() { }
  loanAmount: number = 0;
  interestRate: number = 0;
  loanTenure: number = 0;
  emi: number | undefined;

  calculateEMI() {
    const principal = this.loanAmount;
    const rate = this.interestRate / 1200; // Monthly interest rate
    const tenure = this.loanTenure;

    // Calculate EMI using the formula
    const emi =
      (principal * rate * Math.pow(1 + rate, tenure)) /
      (Math.pow(1 + rate, tenure) - 1);

    this.emi = emi;
  }
  ngOnInit(): void {
  }

}
