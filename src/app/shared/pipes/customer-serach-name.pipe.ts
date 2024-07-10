import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../interfaces/customer';

@Pipe({
  name: 'customerSerachName'
})
export class CustomerSerachNamePipe implements PipeTransform {

  transform(customers: Customer[], name:string): Customer[] {
    return customers.filter((customer)=>customer.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
  }

}
