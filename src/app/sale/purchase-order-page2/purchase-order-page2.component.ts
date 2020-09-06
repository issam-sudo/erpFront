import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm, Validators , FormGroup , FormBuilder} from '@angular/forms';


interface Facture {

  art: string;
  description: string;
  quantite: string;
  unite: string;
  unit: string;
  montant: string;
}
interface Ville {
  value: string;
  viewValue: string;
}
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


const ELEMENT_DATA: Facture[] = [
  {art: 'Rocca10',description :'description', quantite:'12', unite:'Kg',unit:'1200 £',montant:'1200 £'},


];

@Component({
  selector: 'app-purchase-order-page2',
  templateUrl: './purchase-order-page2.component.html',
  styleUrls: ['./purchase-order-page2.component.scss']
})
export class PurchaseOrderPage2Component implements OnInit {
  displayedColumns: string[] = ['art','description', 'quantite', 'unite','unit','montant','action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  

  url: string | ArrayBuffer ='../../assets/addLogoElhoo.png';


  facture : Facture = {
    art :"",
    description :"",
    quantite:"",
    unite: "",
    unit:"",
    montant:"",

  };
  invoiceForm= new FormGroup({
    art: new FormControl("", [Validators.required]),
    description: new FormControl("", [Validators.required]),
    quantite: new FormControl("", [Validators.required]),
    unite: new FormControl("", [Validators.required]),
    unit: new FormControl("", [Validators.required]),
    montant: new FormControl("", [Validators.required]),
  });

  addNew(){
    if(this.invoiceForm.valid){
    ELEMENT_DATA.push(this.invoiceForm.value)
   this.dataSource = new MatTableDataSource(ELEMENT_DATA);
   this.facture = {
    art :"",
    description :"",
    quantite:"",
    unite: "",
    unit:"",
    montant:"",


  };
  this.invoiceForm.reset();
 
 }
}

  value: string;
  selectedUsers: string;
  delaiFormControl = new FormControl('', [
    Validators.required,
   
  ])


  users = [
    { name: 'Hjije Youssef', adress: 'Rue La fontaine 150 brussels', adressLivr: 'Rue La fontaine 150 brussels llllllll', date:'20/05/2020', dateLivraison:'20/05/2021' },
    { name: 'Hjije Youssef', adress: 'Rue La fontaine 150 brussels' },
    { name: 'majd', adress: 'Rue La fontaine 150 brussels' }
  ];

  champPersoForm = new FormGroup({
    title: new FormControl("", [Validators.required]),
    content: new FormControl("", [Validators.required]),
  });

 

  champsPerso: any = [];
  disableForm = false;

  selectedUser: any;

  constructor(public dialog: MatDialog) { }


  ngOnInit(): void {
  }

  onSelectUserChange(event) {
    this.selectedUser = event.value;
  }
  
  onChampPersoSubmit(){
    if(this.champPersoForm.valid){
      this.champsPerso.push(this.champPersoForm.value);
      this.champPersoForm.reset();
      this.disableChampPersoForm();
    }
  }

  onChampPersoDelete(index){
    this.champsPerso.splice(index, 1);
    this.disableChampPersoForm();
  }
//desable button 
  disableChampPersoForm(){
    const len = this.champsPerso.length;
    if(len==4) { this.disableForm = true }
    else this.disableForm = false;
  }


  onDeleteRowTable(index){
    ELEMENT_DATA.splice(index, 1);
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

  onSelectFile(event) { // called each time file input changes
    console.log(event);
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;

      }
    }
}

openDialogAdressPurchaseOrder() {
  this.dialog.open(adressOrder, {

    data: {
      animal: 'panda'
    },
    width: '30%',
    height: '30%',
    panelClass: 'my-custom-dialog-class'
  });

}
openDialogAddClient() {
  this.dialog.open(addClientOrder, {

    data: {
      animal: 'panda'
    },
    width: '30%',
    height: '60%',
    panelClass: 'my-custom-dialog-class'
  });

}

openDialogDatePurshaseOrder() {
  this.dialog.open(DatePurshaseOrder, {

    data: {
      animal: 'panda'
    },
    width: '30%',
    height: '60%',
    panelClass: 'my-custom-dialog-class'
  });

}
openDialogMessagePurchase() {
  this.dialog.open(MessagePurchase, {

    data: {
      animal: 'panda'
    },
    width: '30%',
    height: '40%',
    panelClass: 'my-custom-dialog-class'
  });

}

}
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'adress-purchase-order-popUp',
  templateUrl: 'adress-purchase-order-popUp.html',
  styleUrls: ['./purchase-order-page2.component.scss']
})
// tslint:disable-next-line:component-class-suffix
export class adressOrder {
  url: any;
  constructor(private router: Router, public dialogRef: MatDialogRef<adressOrder> ) { }
  ngOnInit(): void {
  }
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'add-client-popUp',
  templateUrl: 'add-client-popUp.html',
  styleUrls: ['./purchase-order-page2.component.scss']
})
// tslint:disable-next-line:component-class-suffix
export class addClientOrder {
  url: any;
  constructor(private router: Router, public dialogRef: MatDialogRef<addClientOrder> ) { }
  ngOnInit(): void {
  }
  villeFormControl = new FormControl('', [
    Validators.required,

  ]);
  emailFormControl = new FormControl('', [
    Validators.required
    , Validators.email

  ]);
  matcher = new MyErrorStateMatcher();

  selectedValueVille: string;
  villes: Ville[] = [
    {value: 'Anvers', viewValue: 'Anvers'},
    {value: 'Gand', viewValue: 'Gand'},
    {value: 'Louvain', viewValue: 'Louvain'}
  ];

}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'date-purchase-order-popUp',
  templateUrl: 'date-purchase-order-popUp.html',
  styleUrls: ['./purchase-order-page2.component.scss']
})
// tslint:disable-next-line:component-class-suffix
export class DatePurshaseOrder {
 
  constructor(private router: Router, public dialogRef: MatDialogRef<DatePurshaseOrder> ) { }
  ngOnInit(): void {
    console.log("test")
  }

}


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'note-purchase-order-popUp',
  templateUrl: 'note-purchase-order-popUp.html',
  styleUrls: ['./purchase-order-page2.component.scss']
})
// tslint:disable-next-line:component-class-suffix
export class MessagePurchase {
 
  constructor(private router: Router, public dialogRef: MatDialogRef<MessagePurchase> ) { }
  ngOnInit(): void {
    console.log("test")
  }

}
