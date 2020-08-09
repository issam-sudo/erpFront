import { Component, OnInit } from '@angular/core';
declare var translateFunc;
@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  lng2: any;

  constructor() { }
  vl: string;

  lng: any;

 
  ngOnInit(): void {
    translateFunc();
    this.vl = 'frr';

    console.log(this.vl);
    
  }

  clickButton(e: string) {

    this.lng  =  document.getElementById('selectlanguage1');
    this.vl = e
    console.log(this.vl);
  }

}
