import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {  Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
@Component({
  selector: 'app-recurring-bills',
  templateUrl: './recurring-bills.component.html',
  styleUrls: ['./recurring-bills.component.scss']

})
export class RecurringBillsComponent implements OnInit {
  isClients: boolean;
  route_active: string;
  displayedColumns: string[] = ['act','facture', 'date', 'client', 'montant','status', 'financement','action'];
  displayedColumns1: string[] = ['act', 'devis', 'date', 'client', 'montant', 'status', 'new' , 'action'];

  usersSelect: any;

  URL: string;
  repos: any;
  ee: any = null;
  repo: any;
  dataSource: any;
  repos2: any;
   @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
 

  hidden: any = 'pagepincipale';

  constructor(private router: Router) {}
  pageprincipale(){
    this.hidden = 'pagepincipale';
  }
  page2(){
    this.hidden = 'page2';
  }


  public pageSize = 10;
public currentPage = 0;
public totalSize = 0;
pageSizeOptions = [5, 10, 25, 100];

  manualPage = 0;
  pageSize1: any;
  lengthpage: number;
  pageNum: any ;
  manualPage1: number;
  lengthTotal: any;
collection: any = [1, 2, 3];

 ngOnInit(): void {
   this.route_active = this.router.url;
   // this.paginator._intl.itemsPerPageLabel = '';
   this.getUser();
   console.log(this.totalSize);
   this.updateManualPagprevious();
   this.updateManualPag();
 }


 setrouter(e){
   this.route_active = e;
   console.log(this.route_active);
   this.router.navigate([this.route_active]).then(() => {
     window.location.reload();
   });

 }

 async  getUser(){



   this.URL = 'https://api.github.com/search/repositories?q=created:>2017-08-21&sort=stars&order=desc&page=';
   9;
   const response = await fetch(this.URL);

   if (response.ok) {
     const json = await response.json();
     console.log(json);
     this.lengthTotal = json.items.length;

     this.repos =  await json.items;
     this.repos2 =  await json.items;
     this.dataSource = new MatTableDataSource(this.repos) ;
     console.log(json.items.count);



 } else {
   // tslint:disable-next-line:quotemark
   alert("HTTP-Error: " + response.status);
}
   this.dataSource.paginator = this.paginator;
   this.dataSource.sort = this.sort;

}


applyFilter(event: Event) {
 const filterValue = (event.target as HTMLInputElement).value;
 this.dataSource.filter = filterValue.trim().toLowerCase();
 if (this.dataSource.paginator) {
   this.dataSource.paginator.firstPage();
 }
}
updateManualPag(){
 this.manualPage = this.manualPage + 1;
 console.log(this.manualPage);
 this.paginator.pageIndex = this.paginator.pageIndex + 1;
 console.log(  this.paginator.pageIndex);
 this.paginator.page.next({
   pageIndex: this.paginator.pageIndex,
   pageSize: this.paginator.pageSize,
   length: this.paginator.length
 });
}

updateManualPagprevious(){
 this.manualPage = this.manualPage - 1;
 console.log(this.manualPage);
 this.paginator.pageIndex = this.paginator.pageIndex - 1;
 console.log( this.paginator.pageIndex);
 this.paginator.page.next({
   pageIndex: this.paginator.pageIndex,
   pageSize: this.paginator.pageSize,
   length: this.paginator.length
 });
}

public updateManualPage(index): void {
 console.log(index);
 this.pageNum = index;
 this.manualPage = index;
 this.paginator.pageIndex = index;

 this.paginator.page.next({
   pageIndex: this.paginator.pageIndex,
   pageSize: this.paginator.pageSize,
   length: this.paginator.length
 });
 console.log;
}
public updateManualPage2(index2): void {
this.collection = [];


this.paginator.pageSize = index2;

this.paginator.page.next({
 pageIndex: this.paginator.pageIndex,
 pageSize: this.paginator.pageSize,
 length: this.paginator.length
});


this.lengthpage = parseInt('' + 30 / index2);

console.log(this.lengthpage);

// Create dummy data
for (let i = 0; i < this.lengthpage; i++) {
 this.collection.push(i + 1);
}

console.log(this.collection);
}


public clearManualPage(): void {
 this.manualPage = 0;
}
 
}