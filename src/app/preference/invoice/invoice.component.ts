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
import { environment } from '../../../environments/environment.prod';
import { AccountService } from '../services/account.service';
 
declare var require: any
const FileSaver = require('file-saver');
interface delai {
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
@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  
  checkedMail = false;
  checkedReception = false;
  langue: any;
  langueValue: string ='fr';
  textLangue: any;
  value: string;
  lng: any;
  langue2: string;
  url: string | ArrayBuffer;
  invoicedate: any;
  nameSearchElement2: string;
  duedate: any;
  totalamount: any;
  invoicenumber: any;
  iban: any;
  bic: any;
  communication: any;
  stringComplets: any;
 
  constructor(private router: Router ,public dialog: MatDialog ,public accountService: AccountService) { }
  
  showTradiction: any =false;
  ngOnInit(): void {
 this.textAreaSaisie()
 
 
  }



  onSelectFile(event) { // called each time file input changes
   
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
        environment.urlFileUploadByUser =  event.target.result.toString();
        this.accountService.urlPath.next(event.target.result.toString()) 
        
      }
    }
}
 
  clickButton(e: string) {
  
    this.langue2  =  (<HTMLInputElement>document.getElementById('textLangue')).value;
    
 console.log(this.langue2)
 
    this.langueValue = e
    console.log(this.langueValue);
    this.showTradiction =true
  }
 
  // tslint:disable-next-line:member-ordering
  nomFormControl = new FormControl('', [
    Validators.required,

  ]);
  prenomFormControl = new FormControl('', [
    Validators.required,

  ]);
  delaiFormControl = new FormControl('', [
    Validators.required,

  ]);
  matcher = new MyErrorStateMatcher();

  selectedValue: string;
  selectedValue1: string;
  selectedCar: string;

  delai: delai[] = [
    {value: '0', viewValue: 'jours fin de mois'},
    {value: '1', viewValue: 'jours fin de mois'},
    {value: '2', viewValue: 'jours fin de mois'}
  ];
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

  downloadPdf() {
    const pdfUrl = this.url;
    const pdfName = 'your_pdf_file';
    FileSaver.saveAs(pdfUrl, pdfName);
  }

  openDialogFileUpload() {
    this.dialog.open(FileUpload,{
   
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
  selector: 'fileUpload',
  templateUrl: 'fileUpload.html',
  styleUrls: ['./invoice.component.css']
})
// tslint:disable-next-line:component-class-suffix
export class FileUpload {
 
  url:any =environment.urlFileUploadByUser
  constructor(private router: Router, public dialogRef: MatDialogRef<FileUpload> , public accountService:AccountService) { }
  
 
  
  ngOnInit(): void {
    this.accountService.currentdata.subscribe(data=>{
      this.url =data
    })
   
  }
}