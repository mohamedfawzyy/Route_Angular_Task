import { transition } from '@angular/animations';
import { DataService } from 'src/app/shared/services/data.service';

import { Component, inject, OnInit } from '@angular/core';
import { Customer } from 'src/app/shared/interfaces/customer';
import { Transaction } from 'src/app/shared/interfaces/transaction';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  userId:number=null!;
  selectedCustomer:Customer[]=[];
  selectedCustomerTransaction:Transaction[]=[];
  amountPerDay=new Map();
  chartOptions ={};
  errorNotValidCautomer:string="";
  errorNoTransactions:string="";
  constructor(private _DataService:DataService ,private _ActivatedRoute:ActivatedRoute) {
    console.log("jo");
    
  }
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>this.userId=parseInt(params.get('id')??""),
      error:(error)=>console.log(error)
    })

    this._DataService.getAllCustomers().subscribe({
      next:(data)=>  this.selectedCustomer=data,
      error:(error)=>console.log(error)
    });
    this._DataService.getAllTransactions().subscribe({
      next:(data)=>{
        this.selectedCustomerTransaction=data
        this.filterForSpecificUser(this.userId)
      } ,
      error:(error)=>console.log(error)
    })
   
  }

  filterForSpecificUser(id:number){
  
   this.selectedCustomer=this.selectedCustomer.filter((customer)=>customer.id == id);
   if(this.selectedCustomer.length > 0){
    this.selectedCustomerTransaction=this.selectedCustomerTransaction.filter((transition)=>transition.customer_id==id); 
    if(this.selectedCustomerTransaction.length > 0 ){
      for (const transition of this.selectedCustomerTransaction) {
        if(this.amountPerDay.has(transition.date)){
          let totalAmount=this.amountPerDay.get(transition.date)+transition.amount;
          this.amountPerDay.set(transition.date,totalAmount);
        }
        else{
          this.amountPerDay.set(transition.date,transition.amount);
        }
      }
     
      this.chartOptions= {
        title: {
          text: ` customer ${this.selectedCustomer[0].name}. `
        },
        animationEnabled: true,
        axisY: {
          includeZero: true
        },
        data: [{
          type: "column", //change type to bar, line, area, pie, etc
          //indexLabel: "{y}", //Shows y value on all Data Points
          indexLabelFontColor: "#5A5757",
          dataPoints: Array.from(this.amountPerDay).map(([label, y]) => ({label, y}))
        }]
      }
    }else{
      this.errorNoTransactions="No transaction for this customer"
    }
    
   }else{
      this.errorNotValidCautomer="Not Valid Customer";
   }
   
  }
 
	
}
