import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  urlPath   = new BehaviorSubject(null);
  currentdata = this.urlPath.asObservable();
  constructor() { }
}
