import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const elemnt: any[] = [
  {devis: 'k258639', date : '20/05/2020', client: 'Youssef Hjije', montant: '90000'},
  {devis: 'k258639', date : '20/05/2020', client: 'Youssef Hjije', montant: '90000'},
  {devis: 'k258639', date : '20/05/2020', client: 'Youssef Hjije', montant: '90000'},
  {devis: 'k258639', date : '20/05/2020', client: 'Youssef Hjije', montant: '90000'},
  {devis: 'k258639', date : '20/05/2020', client: 'Youssef Hjije', montant: '90000'},
  {devis: 'k258639', date : '20/05/2020', client: 'Youssef Hjije', montant: '90000'},
  {devis: 'k258639', date : '20/05/2020', client: 'Youssef Hjije', montant: '90000'},

];

@Component({
  selector: 'app-delivery-note',
  templateUrl: './delivery-note.component.html',
  styleUrls: ['./delivery-note.component.scss']
})
export class DeliveryNoteComponent implements OnInit {
  hidden: any = 'pagepincipale';
  isClients: boolean;
  route_active: string;
  displayedColumns: string[] = ['act', 'devis', 'date', 'client', 'montant', 'status', 'action'];
  dataSource = elemnt;

  constructor() { }
pageprincipale(){
  this.hidden = 'pagepincipale';
}
page2(){
  this.hidden = 'page2';
}

  ngOnInit(): void {
  }

}
