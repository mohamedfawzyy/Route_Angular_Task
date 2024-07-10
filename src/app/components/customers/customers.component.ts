import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/shared/interfaces/customer';
import { Transaction } from 'src/app/shared/interfaces/transaction';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customerSearchName:string="";
  transactionSearchAmount:string="";
  cutomers:Customer[]=[];
  transactions:Transaction[]=[];
  constructor(private _DataService:DataService) {
    
  }
  ngOnInit(): void {
    this._DataService.getAllCustomers().subscribe({
      next:(data)=>this.cutomers=data,
      error:(error)=>console.log(error)
    });
    this._DataService.getAllTransactions().subscribe({
      next:(data)=>this.transactions=data,
      error:(error)=>console.log(error)
      
      
    })
  }
}
