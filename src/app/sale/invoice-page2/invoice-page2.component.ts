import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';


interface Facture {

  art: string;
  description: string;
  quantite: string;
  unite: string;
  unit: string;
  montant: string;
}


const ELEMENT_DATA: Facture[] = [
  {art: 'Rocca10',description :'description', quantite:'12', unite:'Kg',unit:'1200 £',montant:'1200 £'},


];

@Component({
  selector: 'app-invoice-page2',
  templateUrl: './invoice-page2.component.html',
  styleUrls: ['./invoice-page2.component.scss']
})
export class InvoicePage2Component implements OnInit {

  constructor(public dialog: MatDialog) { }
  displayedColumns: string[] = ['art','description', 'quantite', 'unite','unit','montant','action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);



  url: string | ArrayBuffer ='../../assets/addLogoElhoo.png';


  facture : Facture = {
    art :'',
    description :'',
    quantite:'',
    unite: '',
    unit:'',
    montant:'',

  };
  invoiceForm= new FormGroup({
    art: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    quantite: new FormControl('', [Validators.required]),
    unite: new FormControl('', [Validators.required]),
    unit: new FormControl('', [Validators.required]),
    montant: new FormControl('', [Validators.required]),
  });

  value: string;
  selectedUsers: string;
  delaiFormControl = new FormControl('', [
    Validators.required,

  ]);


  users = [
    { name: 'Hjije Youssef', adress: 'Rue La fontaine 150 brussels', adressLivr: 'Rue La fontaine 150 brussels llllllll', date:'20/05/2020', dateLivraison:'20/05/2021' },
    { name: 'Hjije Youssef', adress: 'Rue La fontaine 150 brussels' },
    { name: 'majd', adress: 'Rue La fontaine 150 brussels' }
  ];

  champPersoForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required]),
  });



  champsPerso: any = [];
  disableForm = false;

  selectedUser: any;

  addNew(){
    if(this.invoiceForm.valid){
    ELEMENT_DATA.push(this.invoiceForm.value);
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.facture = {
    art : '',
    description : '',
    quantite: '',
    unite: '',
    unit: '',
    montant: '',


  };
    this.invoiceForm.reset();

 }
}

  ngOnInit(): void {
  }

  onSelectUserChange(event) {
    this.selectedUser = event.value;
  }

  onChampPersoSubmit(){
    if (this.champPersoForm.valid){
      this.champsPerso.push(this.champPersoForm.value);
      this.champPersoForm.reset();
      this.disableChampPersoForm();
    }
  }

  onChampPersoDelete(index){
    this.champsPerso.splice(index, 1);
    this.disableChampPersoForm();
  }
// desable button
  disableChampPersoForm(){
    const len = this.champsPerso.length;
    if (len === 4) { this.disableForm = true; }
    else { this.disableForm = false; }
  }


  onDeleteRowTable(index){
    ELEMENT_DATA.splice(index, 1);
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

  onSelectFile(event) { // called each time file input changes
    console.log(event);
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;

      };
    }
}
openDialogFileUpload() {
  this.dialog.open(Poup, {

    data: {
      animal: 'panda'
    },
    width: '50%',
    height: '60%',
    panelClass: 'my-custom-dialog-class'
  });

}

}


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'poup',
  templateUrl: 'poup.html',
  styleUrls: ['./invoice-page2.component.scss']
})
// tslint:disable-next-line:component-class-suffix
export class Poup {
  url: any;


  constructor(private router: Router, public dialogRef: MatDialogRef<Poup> ) { }



  ngOnInit(): void {



  }
}
