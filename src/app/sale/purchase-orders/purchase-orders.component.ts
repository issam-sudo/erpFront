import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const elemnt: any[] = [
  {devis: 'k258639',date :'20/05/2020', client:'Youssef Hjije', montant:'90000'},
  {devis: 'k258639',date :'20/05/2020', client:'Youssef Hjije', montant:'90000'},
  {devis: 'k258639',date :'20/05/2020', client:'Youssef Hjije', montant:'90000'},
  {devis: 'k258639',date :'20/05/2020', client:'Youssef Hjije', montant:'90000'},
  {devis: 'k258639',date :'20/05/2020', client:'Youssef Hjije', montant:'90000'},
  {devis: 'k258639',date :'20/05/2020', client:'Youssef Hjije', montant:'90000'},
  {devis: 'k258639',date :'20/05/2020', client:'Youssef Hjije', montant:'90000'},
 
]


@Component({
  selector: 'app-purchase-orders',
  templateUrl: './purchase-orders.component.html',
  styleUrls: ['./purchase-orders.component.scss']
})
export class PurchaseOrdersComponent implements OnInit {
  isClients: boolean;
  route_active: string;
  displayedColumns: string[] = ['act','devis', 'date', 'client', 'montant','status','action'];
  dataSource = elemnt;

  constructor() { }

  ngOnInit(): void {
  }

}
