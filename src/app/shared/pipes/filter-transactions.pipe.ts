import { Pipe, PipeTransform } from '@angular/core';
import { Transaction } from '../interfaces/transaction';


@Pipe({
  name: 'filterTransactions'
})
export class FilterTransactionsPipe implements PipeTransform {
  transform(trasactions: Transaction[], id:number): Transaction[] {
    return trasactions.filter((transition)=>transition.customer_id == id)
  }
}
