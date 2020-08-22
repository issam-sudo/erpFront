import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  globalVar:any =[1,2,3];
  urlPath   = new BehaviorSubject(null);
  currentdata = this.urlPath.asObservable();

  urlPathQuote   = new BehaviorSubject(null);
  currentdataQuote = this.urlPathQuote.asObservable();


  categorieList = new BehaviorSubject(this.globalVar);
  categorie =this.categorieList.asObservable();
  urlPathPurchase   = new BehaviorSubject(null);
  currentdataPurchase = this.urlPathPurchase.asObservable();

  urlActive = false
  constructor() { }
}
              