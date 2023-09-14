import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emiwithgraph',
  templateUrl: './emiwithgraph.component.html',
  styleUrls: ['./emiwithgraph.component.css']
})
export class EmiwithgraphComponent implements OnInit {

  constructor() { }
  loanAmount:number=0;
  interestAmount:number=0;
  loan:number=0;
  emi:number |undefined;

  calculateEMI(){
    const principal=this.loanAmount;
    const rate=this.interestAmount /1200;
    const tenrue= this.loan;
  
  //calculate the EMI using the formulae
  const emi=
    (principal *rate * Math.pow( 1+rate, tenrue)) /
    (Math.pow(1 + rate ,tenrue));
    this.emi=emi;
}
  ngOnInit(): void {
  }

}
