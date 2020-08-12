import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import {FormControl, FormGroupDirective, NgForm, Validators , FormGroup , FormBuilder} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Moment } from 'moment';
import { MatDatepicker } from '@angular/material/datepicker';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
 
import { AccountService } from '../services/account.service';
 
declare var require: any
const FileSaver = require('file-saver');
interface delai {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  
  selectedValue: string;
  selectedValue1: string;
  selectedCar: string;
  delai: delai[] = [
    {value: '0', viewValue: 'jours fin de mois'},
    {value: '1', viewValue: 'jours fin de mois'},
    {value: '2', viewValue: 'jours fin de mois'}
  ];

  nomFormControl = new FormControl('', [
    Validators.required,

  ]);
  prenomFormControl = new FormControl('', [
    Validators.required,

  ]);
  delaiFormControl = new FormControl('', [
    Validators.required,

  ]);
  stringComplets: any;
  invoicedate: string;
  duedate: string;
  totalamount: string;
  invoicenumber: string;
  iban: string;
  bic: string;
  communication: string;
  url: any;
  langue2: string;
  langueValue: string ='fr';
  showTradiction: boolean;
  constructor(private router: Router ,public dialog: MatDialog ,public accountService: AccountService) { }

  ngOnInit(): void {
    this.textAreaSaisie()
  }
 
  clickButton(e: string) {
  
    this.langue2  =  (<HTMLInputElement>document.getElementById('textLangue')).value;
    
 console.log(this.langue2)
 
    this.langueValue = e
    console.log(this.langueValue);
    this.showTradiction =true
  }
 
  textAreaSaisie(){
    var nameSearchElement: any = document.getElementById("textLangue")
   
    this.stringComplets =nameSearchElement.value ;
    var tab =['invoicedate' ,'duedate' , 'totalamount']
    var invoicedate = /invoicedate/gi; 
    var duedate = /duedate/gi;
    var totalamount = /totalamount/gi; 
    var invoicenumber = /invoicenumber/gi;
    var iban = /iban/gi; 
    var bic = /bic/gi;
    var communication = /communication/gi;
    var str = this.stringComplets.toString() ;
    console.log(str)


    if (str.search(invoicedate) == -1 ) { 
       console.log("Does not contain invoicedate" ); 
    } else { 
       console.log("Contains invoicedate" ); 
       this.invoicedate = "%invoicedate%"
    } 

    if (str.search(duedate) == -1 ) { 
      console.log("Does not contain duedate" ); 
   } else { 
      console.log("Contains duedate" ); 
      this.duedate = "%duedate%"
   } 

   if (str.search(totalamount) == -1 ) { 
    console.log("Does not contain totalamount" ); 
 } else { 
    console.log("Contains totalamount" ); 
    this.totalamount = "%totalamount%"
 } 

 if (str.search(invoicenumber) == -1 ) { 
  console.log("Does not contain invoicenumber" ); 
} else { 
  console.log("Contains invoicenumber" ); 
  this.invoicenumber = "%invoicenumber%"
} 


if (str.search(iban) == -1 ) { 
  console.log("Does not contain iban" ); 
} else { 
  console.log("Contains iban" ); 
  this.iban = "%iban%"
} 

if (str.search(bic) == -1 ) { 
  console.log("Does not contain bic" ); 
} else { 
  console.log("Contains bic" ); 
  this.bic = "%bic%"
} 

if (str.search(communication) == -1 ) { 
  console.log("Does not contain communication" ); 
} else { 
  console.log("Contains communication" ); 
  this.communication = "%communication%"
} 




  }
  onSelectFile(event) { // called each time file input changes
   
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
        
        this.accountService.urlPathQuote.next(event.target.result.toString()) 
        
      }
    }
}
  downloadPdf() {
    const pdfUrl = this.url;
    const pdfName = 'your_pdf_file';
    FileSaver.saveAs(pdfUrl, pdfName);
  }


  /* 
users: any[] = [];
addUser(){
    this.users.push({});//push empty object of type user
}
removeUser(i){
    this.users.splice(i, 1);    
} */

openDialogFileUpload() {
  this.dialog.open(Quote_fileUpload,{
 
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
  selector: 'quote_fileUpload',
  templateUrl: 'quote_fileUpload.html',
  styleUrls: ['./quote.component.scss']
})
// tslint:disable-next-line:component-class-suffix
export class Quote_fileUpload {
  url: any;
 
  
  constructor(private router: Router, public dialogRef: MatDialogRef<Quote_fileUpload> , public accountService:AccountService ) { }
  
 
  
  ngOnInit(): void {
 
    this.accountService.currentdataQuote.subscribe(data=>{
      this.url =data
   
  })
}

}