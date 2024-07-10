import { Pipe, PipeTransform } from '@angular/core';
import { Transaction } from '../interfaces/transaction';

@Pipe({
  name: 'amountFilter'
})
export class AmountFilterPipe implements PipeTransform {

  transform(transactions:Transaction[], amount:string): Transaction[] {
    if(parseInt(amount) > 0){
      return transactions.filter((trasaction)=>trasaction.amount == parseInt(amount));
    }
    return transactions;
  }

}
