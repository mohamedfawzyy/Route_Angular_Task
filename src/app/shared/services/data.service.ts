import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _HttpClient:HttpClient) { }

  getAllCustomers():Observable<any>{
    return this._HttpClient.get(`http://localhost:3000/customers`);
  }
  getAllTransactions():Observable<any>{
    return this._HttpClient.get(`http://localhost:3000/transactions`);
  }
}

