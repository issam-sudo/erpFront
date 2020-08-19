import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  globalVar:boolean;
  urlPath   = new BehaviorSubject(null);
  currentdata = this.urlPath.asObservable();

  urlPathQuote   = new BehaviorSubject(null);
  currentdataQuote = this.urlPathQuote.asObservable();


  
  urlPathPurchase   = new BehaviorSubject(null);
  currentdataPurchase = this.urlPathPurchase.asObservable();
  urlActive = false
  constructor() { }
}
              