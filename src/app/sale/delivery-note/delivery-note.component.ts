import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: any;
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
  usersSelect: any;
  name: any ="wiwikuan";
  URL: string;
  repos: any;
 
  constructor() { }
pageprincipale(){
  this.hidden = 'pagepincipale';
}
page2(){
  this.hidden = 'page2';
}

  ngOnInit(): void {
 
 
  }
 
 
  async  getUser(){

    this.URL = 'https://api.github.com/search/repositories?q=created:>2020-06-21&sort=stars&order=desc&page='

    const response = await fetch(this.URL);

    if (response.ok) {
      const json = await response.json();
      console.log(json);
         // tslint:disable-next-line:prefer-const
    // tslint:disable-next-line:no-var-keyword
    // tslint:disable-next-line:prefer-const
    let nameSearchElement: any = document.getElementById('searchInput');
    console.log(nameSearchElement.value);
    if (nameSearchElement.value.length)
     {
        // tslint:disable-next-line:only-arrow-functions
        this.repos =  await json.items.filter(function(Allrepos) {
        return Allrepos.name.includes(nameSearchElement.value);

        }.bind(this));
          // tslint:disable-next-line:align
          console.log(this.repos);
      

    }
  } else {
    // tslint:disable-next-line:quotemark
    alert("HTTP-Error: " + response.status);
}
}


}