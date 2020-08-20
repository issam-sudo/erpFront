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
import { AccountService } from 'src/app/preference/services/account.service';
import { environment } from '../../../environments/environment.prod';

interface Pays {
  value: string;
  viewValue: string;
}
interface Devise {
  value: string;
  viewValue: string;
}

interface Type {
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
  selector: 'app-purchase-category',
  templateUrl: './purchase-category.component.html',
  styleUrls: ['./purchase-category.component.scss']
})


export class PurchaseCategoryComponent implements OnInit {
  url: any;
   
  activebutton: boolean =true ;
   

  constructor(private router: Router,public dialog: MatDialog,public accountService: AccountService) {

   }
   
 
  ngOnInit(): void {

    this.accountService.currentdataPurchase.subscribe(data=>{
      this.url =data
      
   
    
    })

  }

  openDialogFileUpload() {
    this.dialog.open(Category_fileUpload,{
   
      data: {
        animal: 'panda'
      },
      width: '40%',
      height: '45%',
      panelClass: 'my-custom-dialog-class'
    });
  
  }

  selectedValueTypes: string;
  types: Type[] = [
    {value: 'Facture', viewValue: 'Facture'},
    {value: 'Facture', viewValue: 'Facture'},
    {value: 'Facture', viewValue: 'Facture'}
  ];
  selectedValuePays: string;
pays: Pays[] = [
  {value: 'Belgique', viewValue: 'Belgique'},
  {value: 'France', viewValue: 'France'},
  {value: 'Maroc', viewValue: 'Maroc'}
];
selectedValueDevise: string;
devise: Devise[] = [
  {value: 'MAD', viewValue: 'MAD'},
  {value: 'EUR', viewValue: 'EUR'},
  {value: 'USD', viewValue: 'USD'}
];




NumeroFactureControl = new FormControl('', [
  Validators.required,

]);

NomControl = new FormControl('', [
  Validators.required,

]);

EcheanceControl = new FormControl('', [
  Validators.required,

]);

DeviseControl = new FormControl('', [
  Validators.required,

]);
HtvaControl = new FormControl('', [
  Validators.required,

]);
TvaControl = new FormControl('', [
  Validators.required,

]);
TvacControl = new FormControl('', [
  Validators.required,

]);
DateControl = new FormControl('', [
  Validators.required,

]);
matcher = new MyErrorStateMatcher();





}

var reader = new FileReader();
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'category_fileUpload',
  templateUrl: 'category_fileUpload.html',
  
  styleUrls: ['./purchase-category.component.scss']
})
// tslint:disable-next-line:component-class-suffix
export class Category_fileUpload {
  url: any;
 
  size: any;
  type: any;
  name: any;
  
 
  
  constructor(private router: Router, public dialogRef: MatDialogRef<Category_fileUpload>  ,public accountService:AccountService  ) {

   }
  
 


  
  ngOnInit(): void {
    console.log(this.url)
 
}
onSelectFile(event) { // called each time file input changes
    

    reader.readAsDataURL(event.target.files[0]); // read file as data url
    console.log(event.target.files[0])
    this.name = event.target.files[0].name
    this.size = event.target.files[0].size
    this.type = event.target.files[0].type
    
 
    reader.onload = (event) => { // called once readAsDataURL is completed
     
      this.url = event.target.result;
   
      
     
      
    }
  
  
  
}

validerbtn(event){
 
  this.accountService.urlPathPurchase.next(this.url.toString()) 
  this.router.navigate(['/purchase/invoice'])
  this.dialogRef.close();

}


}