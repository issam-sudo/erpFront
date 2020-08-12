import { Component, OnInit, ViewChild } from '@angular/core';
import {SharedModule} from '../../shared/shared.module'
import { Router } from '@angular/router';
import {Chart} from 'node_modules/chart.js';
import { from } from 'rxjs';
import { FormsModule } from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { analyzeAndValidateNgModules } from '@angular/compiler'


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const elemnt: any[] = [
  {facture: 'k258639',date :'20/05/2020', client:'Youssef Hjije', montant:'90000'},
  {facture: 'k258639',date :'20/05/2020', client:'Youssef Hjije', montant:'90000'},
  {facture: 'k258639',date :'20/05/2020', client:'Youssef Hjije', montant:'90000'},
  {facture: 'k258639',date :'20/05/2020', client:'Youssef Hjije', montant:'90000'},
  {facture: 'k258639',date :'20/05/2020', client:'Youssef Hjije', montant:'90000'},
  {facture: 'k258639',date :'20/05/2020', client:'Youssef Hjije', montant:'90000'},
  {facture: 'k258639',date :'20/05/2020', client:'Youssef Hjije', montant:'90000'},
  {facture: 'k258639',date :'20/05/2020', client:'Youssef Hjije', montant:'90000'},
  {facture: 'k258639',date :'20/05/2020', client:'Youssef Hjije', montant:'90000'},
  {facture: 'k258639',date :'20/05/2020', client:'Youssef Hjije', montant:'90000'},
  {facture: 'k258639',date :'20/05/2020', client:'Youssef Hjije', montant:'90000'},
  {facture: 'k258639',date :'20/05/2020', client:'Youssef Hjije', montant:'90000'},

]

@Component({
  selector: 'app-recurring-bills',
  templateUrl: './recurring-bills.component.html',
  styleUrls: ['./recurring-bills.component.scss']

})
export class RecurringBillsComponent implements OnInit {
  isClients: boolean;
  route_active: string;
  displayedColumns: string[] = ['act','facture', 'date', 'client', 'montant','status', 'financement','action'];
  dataSource = elemnt;

  constructor() { }

  ngOnInit(): void {
  }

}
